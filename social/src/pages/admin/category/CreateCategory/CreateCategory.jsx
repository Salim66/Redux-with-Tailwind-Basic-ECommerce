import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './CreateCategory.scss';
import swal from 'sweetalert';
import { createCategory } from '../../../../redux/category/action';

const CreateCategory = ({ create, setCreate }) => {

    // form input state
    const [input, setInput] = useState({
        name: '',
        image: '',
        file: ''
    });

    // call dispatch
    const dispatch = useDispatch();

    // form input change 
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    const handleCategoryCreateClose = () => setCreate(false);

    // image preview
    const handleImage = (e) => {
        const image_url = URL.createObjectURL(e.target.files[0]);
        const previewImage = document.getElementById('imagePreview');
        previewImage.setAttribute('src', image_url);

        setInput((prev) => ({
            ...prev,
            file: e.target.files[0]
        }))
    }

    // create category
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('image', input.file);

        try {

            if(input.name){

                dispatch(createCategory(data));

                setCreate(false);

                swal({
                    title: "Good job!",
                    text: "Category added successfully",
                    icon: "success"
                });

                setInput({
                    name: '',
                    image: '',
                })

            }
            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <>
        <Modal show={ create } onHide={ handleCategoryCreateClose } >
            <Modal.Header closeButton>
                <Modal.Title>Create new category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ handleFormSubmit } >
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Category Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' value={ input.name } onChange={ handleInput } />
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

export default CreateCategory;