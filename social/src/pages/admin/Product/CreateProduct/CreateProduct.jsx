import React from 'react';
import { Modal } from 'react-bootstrap';
import './CreateProduct.scss';

const CreateProduct = ({ create, setCreate }) => {

    const handleProductCreateClose = () => setCreate(false);

  return (
    <>
        <Modal show={ create } onHide={ handleProductCreateClose } size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Create new product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="#">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Product Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="">Regular Price <span className='text-red-500 text-xl'>*</span></label>
                                <input type="number" name='regular_price' className='form-control' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="">Sale Price</label>
                                <input type="number" name='sale_price' className='form-control' />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default CreateProduct;