import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Brand.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateBrand from './CreateBrand/CreateBrand';
import EditBrand from './EditBrand/EditBrand';
import ViewBrand from './ViewBrand/ViewBrand';

const Brand = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);

    // brand create modal
    const handleBrandCreate = () => setCreate(true);

    // single brand view modal
    const handleBrandView = () => setView(true);

    // single brand edit modal
    const handleBrandEdit = () => setEdit(true);


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
                            <tr>
                                <td>#</td>
                                <td>Apex</td>
                                <td>apex</td>
                                <td><img src={ Shoe1 } alt="" /></td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span title='View' onClick={ handleBrandView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span title='Edit' onClick={ handleBrandEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
                                    <span title='Delete'><i className='fa fa-trash ml-3 text-red-500'></i></span>
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
      <CreateBrand create={ create } setCreate={ setCreate } />
      <ViewBrand view={ view } setView={ setView } />
      <EditBrand edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Brand;