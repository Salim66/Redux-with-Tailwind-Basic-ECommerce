import React from 'react';
import { Modal } from 'react-bootstrap';
import './CreateBrand.scss';

const CreateBrand = ({ create, setCreate }) => {

    const handleBrandCreateClose = () => setCreate(false);

    // image preview
    const handleImage = (e) => {
        const image_url = URL.createObjectURL(e.target.files[0]);
        const previewImage = document.getElementById('imagePreview');
        previewImage.setAttribute('src', image_url);
    }

  return (
    <>
        <Modal show={ create } onHide={ handleBrandCreateClose } >
            <Modal.Header closeButton>
                <Modal.Title>Create new brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="#">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Brand Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Image <span className='text-red-500 text-xl'>*</span></label>
                                <input type="file" name='image' className='form-control' onChange={ handleImage } />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2 w-20 h-20">
                                <img id='imagePreview' src="" alt="" className='mb-2' />
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

export default CreateBrand;