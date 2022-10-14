import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Color.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import CreateColor from './CreateColor/CreateColor';
import ViewColor from './ViewColor/ViewColor';
import EditColor from './EditColor/EditColor';


const Color = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);

    // color create modal
    const handleColorCreate = () => setCreate(true);

    // single color view modal
    const handleColorView = () => setView(true);

    // single color edit modal
    const handleColorEdit = () => setEdit(true);


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
                    <button type='button' className='bg-sky-400 px-3 py-2 text-white rounded-md hover:bg-sky-500' onClick={ handleColorCreate }>Add New Color</button>
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
                                <td>Green</td>
                                <td>green</td>
                                <td>
                                    {/* <span><i className='fa fa-times text-red-500'></i></span> */}
                                    <span><i className='fa fa-check text-green-500'></i></span>
                                </td>
                                <td>
                                    <span title='View' onClick={ handleColorView }><i className='fa fa-eye text-sky-500'></i></span>
                                    <span title='Edit' onClick={ handleColorEdit }><i className='fa fa-edit ml-3 text-yellow-500'></i></span>
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
      <CreateColor create={ create } setCreate={ setCreate } />
      <ViewColor view={ view } setView={ setView } />
      <EditColor edit={ edit } setEdit={ setEdit } />
    </>
  )
};

export default Color;