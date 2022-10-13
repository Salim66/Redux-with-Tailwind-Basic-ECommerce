import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Tag.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateTag from './CreateTag/CreateTag';
import EditTag from './EditTag/EditTag';
import ViewTag from './ViewTag/ViewTag';

const Tag = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);

    // tag create modal
    const handleTagCreate = () => setCreate(true);

    // single Tag view modal
    const handleTagView = () => setView(true);

    // single tag edit modal
    const handleTagEdit = () => setEdit(true);


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
                    <table className='table table-striped mt-2'>
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
                            <tr>
                                <td>#</td>
                                <td>Apex</td>
                                <td>apex</td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span title='View' onClick={ handleTagView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span title='Edit' onClick={ handleTagEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
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
      <CreateTag create={ create } setCreate={ setCreate } />
      <ViewTag view={ view } setView={ setView } />
      <EditTag edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Tag;