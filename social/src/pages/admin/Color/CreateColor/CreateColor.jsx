import React from 'react';
import { Modal } from 'react-bootstrap';
import './CreateColor.scss';

const CreateColor = ({ create, setCreate }) => {

    const handleColorCreateClose = () => setCreate(false);

  return (
    <>
        <Modal show={ create } onHide={ handleColorCreateClose } >
            <Modal.Header closeButton>
                <Modal.Title>Create new color</Modal.Title>
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
                                <input type="submit" className='py-2 px-3 rounded-md text-white bg-green-400 hover:bg-green-500' value='Add new' />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default CreateColor;