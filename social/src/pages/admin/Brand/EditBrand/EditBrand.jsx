import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './EditBrand.scss';
import swal from 'sweetalert';
import { updateBrand } from '../../../../redux/brand/action';

const EditBrand = ({ edit, setEdit }) => {

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

    // get brand data form redux
    const { edit_brand } = useSelector( state => state.brand );

    const handleBrandEditClose = () => setEdit(false);

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

    useEffect(() => {
        const data = () => {
            if(edit_brand){
                setInput(edit_brand);
            }
        }
        data();
    }, [edit_brand])

    // create brand
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('image', input.file);

        try {

            if(input.name){

                dispatch(updateBrand(input._id, data));

                setEdit(false);

                swal({
                    title: "Good job!",
                    text: "Brand updated successfully",
                    icon: "success"
                });

                setInput({
                    name: '',
                    image: ''
                })

            }
            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <>
        <Modal show={ edit } onHide={ handleBrandEditClose } >
            <Modal.Header closeButton>
                <Modal.Title>Edit brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ handleFormSubmit } >
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Brand Name <span className='text-red-500 text-xl'>*</span></label>
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
                                <img id='imagePreview' src={ `http://localhost:5050/images/brands/${ input.image }` } alt="" className='mb-2' />
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

export default EditBrand;