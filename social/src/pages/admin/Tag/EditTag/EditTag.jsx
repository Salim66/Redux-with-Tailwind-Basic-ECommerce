import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './EditTag.scss';
import swal from 'sweetalert';
import { updateTag } from '../../../../redux/tag/action';

const EditTag = ({ edit, setEdit }) => {

    const handleTagEditClose = () => setEdit(false);

    // edit useState
    const [input, setInput] = useState({
        name: ''
    });

    // handle input
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    // get tag data form redux
    const { edit_tag } = useSelector( state => state.tag );

    // call dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        const data = () => {
            if(edit_tag){
                setInput(edit_tag);
            }
        }
        data();
    }, [edit_tag])


    // create tag
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            if(input.name){

                dispatch(updateTag(input._id, input));

                setEdit(false);

                swal({
                    title: "Good job!",
                    text: "Tag updated successfully",
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
        <Modal show={ edit } onHide={ handleTagEditClose } >
            <Modal.Header closeButton>
                <Modal.Title>Edit tag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ handleFormSubmit } >
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Tag Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' value={ input.name } onChange={ handleInput } />
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

export default EditTag;