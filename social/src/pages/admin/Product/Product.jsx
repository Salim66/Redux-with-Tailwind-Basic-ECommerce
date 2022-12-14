import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Product.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateProduct from './CreateProduct/CreateProduct';
import ViewProduct from './ViewProduct/ViewProduct';
import EditProduct from './EditProduct/EditProduct';
import swal from 'sweetalert';
import _ from 'lodash';
import { deleteProduct, editProduct, singleProduct, updateStatusProduct } from '../../../redux/product/action';

const pageSize = 10;
const Product = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [paginatedData, setPaginatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // get data from redux
    const { products } = useSelector( state => state.product );

    useEffect(() => {
        const data = () => {
            if(products){
              setPaginatedData(_(products).slice(0).take(pageSize).value());
            }
        }
        data();
    }, [products]);

    // call redux dispatch
    const dispatch = useDispatch();

    // product create modal
    const handleProductCreate = () => setCreate(true);

    // single product view modal
    const handleProductView = (id) => {
      setView(true);
      dispatch(singleProduct(id));
    };

    // single product edit modal
    const handleProductEdit = (id) => {
      setEdit(true);
      dispatch(editProduct(id));
    };

    // handle status update
    const handleStatusUpdate = (e, id) => {
      dispatch(updateStatusProduct(e.target.value, id));
    }

    const handleProductDelete = (e, id) => {
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
              dispatch(deleteProduct(id))
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
    if(products.length > 0){
      pageCount = Math.ceil(products.length/pageSize)+1;
    }else {
      pageCount = 0;
    }
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount +1);
    const pagination = (pageNo) => {
      setCurrentPage(pageNo);
      const startIndex = (pageNo - 1) * pageSize;
      const paginatedData = _(products).slice(startIndex).take(pageSize).value();
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
                    <button type='button' className='bg-sky-400 px-3 py-2 text-white rounded-md hover:bg-sky-500' onClick={ handleProductCreate }>Add New Product</button>
                    <table className='table table-striped mt-2'>
                        <thead className='table-dark'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular Price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Featured Image</th>
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
                                    <td>{ data.regular_price }</td>
                                    <td>{ data.sale_price }</td>
                                    <td>{ data.stock }</td>
                                    <td><img src={ `http://localhost:5050/images/products/${ data.featured_image }` } alt="" /></td>
                                    <td>
                                        <div class="form-check form-switch">
                                          <input class="form-check-input cursor-pointer" type="checkbox" defaultChecked={state_status} onChange={ (e) => handleStatusUpdate(e, data._id) } value={ data.status } />
                                        </div>
                                    </td>
                                    <td> 
                                        <span title='View' onClick={ () => handleProductView(data._id) }><i className='fa fa-eye text-sky-500'></i></span>
                                        <span title='Edit' onClick={ () => handleProductEdit(data._id) }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                        <span title='Delete' onClick={ (e) => handleProductDelete(e, data._id) }><i className='fa fa-trash ml-3 text-red-500'></i></span>
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
      <CreateProduct create={ create } setCreate={ setCreate } />
      <ViewProduct view={ view } setView={ setView } />
      <EditProduct edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Product;