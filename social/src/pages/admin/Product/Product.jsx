import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Product.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateProduct from './CreateProduct/CreateProduct';
import ViewProduct from './ViewProduct/ViewProduct';
import EditProduct from './EditProduct/EditProduct';

const Product = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);

    // product create modal
    const handleProductCreate = () => setCreate(true);

    // single product view modal
    const handleProductView = () => setView(true);

    // single product edit modal
    const handleProductEdit = () => setEdit(true);

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
                            <tr>
                                <td>#</td>
                                <td>T-Shirt</td>
                                <td>200</td>
                                <td>150</td>
                                <td>15</td>
                                <td><img src={ Shoe1 } alt="" /></td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span title='View' onClick={ handleProductView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span title='Edit' onClick={ handleProductEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                    <span title='Delete'><i className='fa fa-trash ml-3 text-red-500'></i></span>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>T-Shirt</td>
                                <td>200</td>
                                <td>150</td>
                                <td>15</td>
                                <td><img src={ Shoe1 } alt="" /></td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span onClick={ handleProductView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span onClick={ handleProductEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                    <span><i className='fa fa-trash ml-3 text-red-500'></i></span>
                                </td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>T-Shirt</td>
                                <td>200</td>
                                <td>150</td>
                                <td>15</td>
                                <td><img src={ Shoe1 } alt="" /></td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span onClick={ handleProductView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span onClick={ handleProductEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                    <span><i className='fa fa-trash ml-3 text-red-500'></i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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