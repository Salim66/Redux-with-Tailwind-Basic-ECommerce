import React from 'react';
import { Modal } from 'react-bootstrap';
import './EditColor.scss';

const EditColor = ({ edit, setEdit }) => {

    const handleColorEditClose = () => setEdit(false);

  return (
    <>
        <Modal show={ edit } onHide={ handleColorEditClose } >
            <Modal.Header closeButton>
                <Modal.Title>Edit Color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="#">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Color Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <input type="submit" className='py-2 px-3 rounded-md text-white bg-green-400 hover:bg-green-500' value='Update' />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default EditColor;