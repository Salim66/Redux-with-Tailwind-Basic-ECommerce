import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Brand.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateBrand from './CreateBrand/CreateBrand';
import EditBrand from './EditBrand/EditBrand';
import ViewBrand from './ViewBrand/ViewBrand';
import swal from 'sweetalert';
import _ from 'lodash';
import { deleteBrand, editBrand, singleBrand, updateStatusBrand } from '../../../redux/brand/action';

const pageSize = 10;
const Brand = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [paginatedData, setPaginatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // get data from redux
    const { brands } = useSelector( state => state.brand );

    useEffect(() => {
        const data = () => {
            if(brands){
              setPaginatedData(_(brands).slice(0).take(pageSize).value());
            }
        }
        data();
    }, [brands]);

    // call redux dispatch
    const dispatch = useDispatch();


    // brand create modal
    const handleBrandCreate = () => setCreate(true);

    // single brand view modal
    const handleBrandView = (id) => {
      setView(true);
      dispatch(singleBrand(id));
    };

    // single brand edit modal
    const handleBrandEdit = (id) => {
      setEdit(true)
      dispatch(editBrand(id));
    };

    // handle status update
    const handleStatusUpdate = (e, id) => {
      dispatch(updateStatusBrand(e.target.value, id));
    }

    const handleBrandDelete = (e, id) => {
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
              dispatch(deleteBrand(id))
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
    if(brands.length > 0){
      pageCount = Math.ceil(brands.length/pageSize)+1;
    }else {
      pageCount = 0;
    }
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount +1);
    const pagination = (pageNo) => {
      setCurrentPage(pageNo);
      const startIndex = (pageNo - 1) * pageSize;
      const paginatedData = _(brands).slice(startIndex).take(pageSize).value();
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
                    <button type='button' className='bg-sky-400 px-3 py-2 text-white rounded-md hover:bg-sky-500' onClick={ handleBrandCreate }>Add New Brand</button>
                    <table className='table table-striped mt-2'>
                        <thead className='table-dark'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Image</th>
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
                                    <td><img src={ `http://localhost:5050/images/brands/${ data.image }` } alt="" /></td>
                                    <td>
                                        <div class="form-check form-switch">
                                          <input class="form-check-input cursor-pointer" type="checkbox" defaultChecked={state_status} onChange={ (e) => handleStatusUpdate(e, data._id) } value={ data.status } />
                                        </div>
                                    </td>
                                    <td> 
                                        <span title='View' onClick={ () => handleBrandView(data._id) }><i className='fa fa-eye text-sky-500'></i></span>
                                        <span title='Edit' onClick={ () => handleBrandEdit(data._id) }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                        <span title='Delete' onClick={ (e) => handleBrandDelete(e, data._id) }><i className='fa fa-trash ml-3 text-red-500'></i></span>
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
      <CreateBrand create={ create } setCreate={ setCreate } />
      <ViewBrand view={ view } setView={ setView } />
      <EditBrand edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Brand;