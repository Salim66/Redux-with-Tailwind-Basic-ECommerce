import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import { deleteSize, editSize, singleSize, updateStatusSize } from '../../../redux/size/action';
import CreateSize from './CreateSize/CreateSize';
import EditSize from './EditSize/EditSize';
import './Size.scss';
import ViewSize from './ViewSize/ViewSize';
import swal from 'sweetalert';
import _ from 'lodash';

const pageSize = 10;
const Size = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [paginatedData, setPaginatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

     // get data from redux
     const { sizes } = useSelector( state => state.size );

    useEffect(() => {
        const data = () => {
            if(sizes){
              setPaginatedData(_(sizes).slice(0).take(pageSize).value());
            }
        }
        data();
    }, [sizes]);

    // call redux dispatch
    const dispatch = useDispatch();

    // size create modal
    const handleSizeCreate = () => setCreate(true);

    // single size view modal
    const handleSizeView = (id) => {
      setView(true);
      dispatch(singleSize(id));
    };

    // single size edit modal
    const handleSizeEdit = (id) => {
      setEdit(true)
      dispatch(editSize(id));
    };

   

    // handle status update
    const handleStatusUpdate = (e, id) => {
      dispatch(updateStatusSize(e.target.value, id));
    }

    const handleSizeDelete = (e, id) => {
      e.preventDefault();
      swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
              dispatch(deleteSize(id))
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
    }

    // pagination
    const pageSize = 10;
    let pageCount = 0;
    if(sizes.length > 0){
      pageCount = Math.ceil(sizes.length/pageSize)+1;
    }else {
      pageCount = 0;
    }
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount +1);
    const pagination = (pageNo) => {
      setCurrentPage(pageNo);
      const startIndex = (pageNo - 1) * pageSize;
      const paginatedData = _(sizes).slice(startIndex).take(pageSize).value();
      setPaginatedData(paginatedData);
    }

  return (
    <>
      <TopHeader />
      <div className="row">
        <div className="col-2 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-10 col-md-10 col-lg-10">
          <div className="products m-8">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card_d bg-white shadow-md py-4 px-5 rounded-md">
                  <div className="card-body">
                    <button type='button' className='bg-sky-400 px-3 py-2 text-white rounded-md hover:bg-sky-500' onClick={ handleSizeCreate }>Add New Size</button>
                    <table className='table table-striped mt-2 table-responsive-md'>
                        <thead className='table-dark'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            paginatedData.map((data, key) => {
                              let state_status = data.status? "checked" : "";
                              return (
                                <tr>
                                    <td>{ key+1 }</td>
                                    <td>{ data.name }</td>
                                    <td>{ data.slug }</td>
                                    <td>
                                        <div class="form-check form-switch">
                                          <input class="form-check-input cursor-pointer" type="checkbox" defaultChecked={state_status} onChange={ (e) => handleStatusUpdate(e, data._id) } value={ data.status } />
                                        </div>
                                    </td>
                                    <td> 
                                        <span title='View' onClick={ () => handleSizeView(data._id) }><i className='fa fa-eye text-sky-500'></i></span>
                                        <span title='Edit' onClick={ () => handleSizeEdit(data._id) }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                        <span title='Delete' onClick={ (e) => handleSizeDelete(e, data._id) }><i className='fa fa-trash ml-3 text-red-500'></i></span>
                                    </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                    </table>
                    <nav className='d-flex justify-end'>
                      <ul className="pagination">
                        {
                          pages && pages.map((page) => (
                            <li className={ page === currentPage ? "page-item active" : "page-item" }>
                              <p className='page-link' onClick={ () => pagination(page) }>{ page }</p>
                            </li>
                          ))
                        }
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateSize create={ create } setCreate={ setCreate } />
      <ViewSize view={ view } setView={ setView } />
      <EditSize edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Size;