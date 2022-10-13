import React from 'react';
import { Modal } from 'react-bootstrap';
import './EditProduct.scss';

const EditProduct = ({ edit, setEdit }) => {

    const handleProductEditClose = () => setEdit(false);

  return (
    <>
        <Modal show={ edit } onHide={ handleProductEditClose } size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Edit product</Modal.Title>
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

export default EditProduct;