import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Tag.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateTag from './CreateTag/CreateTag';
import EditTag from './EditTag/EditTag';
import ViewTag from './ViewTag/ViewTag';
import swal from 'sweetalert';
import _ from 'lodash';
import { deleteTag, editTag, singleTag, updateStatusTag } from '../../../redux/tag/action';

const pageSize = 10;
const Tag = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [paginatedData, setPaginatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

     // get data from redux
     const { tags } = useSelector( state => state.tag );

    useEffect(() => {
        const data = () => {
            if(tags){
              setPaginatedData(_(tags).slice(0).take(pageSize).value());
            }
        }
        data();
    }, [tags]);

    // call redux dispatch
    const dispatch = useDispatch();

    // tag create modal
    const handleTagCreate = () => setCreate(true);

    // single Tag view modal
    const handleTagView = (id) => {
      setView(true);
      dispatch(singleTag(id));
    }

    // single tag edit modal
    const handleTagEdit = (id) => {
      setEdit(true);
      dispatch(editTag(id));
    };

    // handle status update
    const handleStatusUpdate = (e, id) => {
      dispatch(updateStatusTag(e.target.value, id));
    }

    const handleTagDelete = (e, id) => {
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
              dispatch(deleteTag(id))
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
    }

    // pagination
    let pageCount = 0;
    if(tags.length > 0){
      pageCount = Math.ceil(tags.length/pageSize)+1;
    }else {
      pageCount = 0;
    }
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount +1);
    const pagination = (pageNo) => {
      setCurrentPage(pageNo);
      const startIndex = (pageNo - 1) * pageSize;
      const paginatedData = _(tags).slice(startIndex).take(pageSize).value();
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
                    <button type='button' className='bg-sky-400 px-3 py-2 text-white rounded-md hover:bg-sky-500' onClick={ handleTagCreate }>Add New Tag</button>
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
                                          <span title='View' onClick={ () => handleTagView(data._id) }><i className='fa fa-eye text-sky-500'></i></span>
                                          <span title='Edit' onClick={ () => handleTagEdit(data._id) }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                          <span title='Delete' onClick={ (e) => handleTagDelete(e, data._id) }><i className='fa fa-trash ml-3 text-red-500'></i></span>
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
      <CreateTag create={ create } setCreate={ setCreate } />
      <ViewTag view={ view } setView={ setView } />
      <EditTag edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Tag;