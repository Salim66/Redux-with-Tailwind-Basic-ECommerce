import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './CreateColor.scss';
import swal from 'sweetalert';
import { createColor } from '../../../../redux/color/action';

const CreateColor = ({ create, setCreate }) => {

    const handleColorCreateClose = () => setCreate(false);

    // form input state
    const [input, setInput] = useState({
        name: ''
    });

    // call dispatch
    const dispatch = useDispatch();

    // form input change 
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    // create color
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            if(input.name){

                dispatch(createColor(input));

                setCreate(false);

                swal({
                    title: "Good job!",
                    text: "Color added successfully",
                    icon: "success"
                });

                setInput({
                    name: ''
                })

            }
            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <>
        <Modal show={ create } onHide={ handleColorCreateClose } >
            <Modal.Header closeButton>
                <Modal.Title>Create new color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ handleFormSubmit } action="#">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Color Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' value={ input.value } onChange={ handleInput } />
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