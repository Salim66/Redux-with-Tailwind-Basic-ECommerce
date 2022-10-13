import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Category.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateCategory from './CreateCategory/CreateCategory';
import EditCategory from './EditCategory/EditCategory';
import ViewCategory from './ViewCategory/ViewCategory';

const Category = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);

    // category create modal
    const handleCategoryCreate = () => setCreate(true);

    // single category view modal
    const handleCategoryView = () => setView(true);

    // single category edit modal
    const handleCategoryEdit = () => setEdit(true);


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
                    <button type='button' className='bg-sky-400 px-3 py-2 text-white rounded-md hover:bg-sky-500' onClick={ handleCategoryCreate }>Add New Category</button>
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
                                <td>Men</td>
                                <td>men</td>
                                <td><img src={ Shoe1 } alt="" /></td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span title='View' onClick={ handleCategoryView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span title='Edit' onClick={ handleCategoryEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
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
      <CreateCategory create={ create } setCreate={ setCreate } />
      <ViewCategory view={ view } setView={ setView } />
      <EditCategory edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Category;