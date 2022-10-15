import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, CloseButton } from 'react-bootstrap';
import './ViewCategory.scss';

const ViewCategory = ({ view, setView }) => {

    // view category close
    const handleViewClose = () => setView(false);

    // get single category form redux
    const { single_category } = useSelector( state => state.category );

  return (
    <>
        <Modal show={ view } onHide={ handleViewClose }>
            <Modal.Header  closeButton>
                <Modal.Title>Single Category View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Category Info</th>
                            <th>Category Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{ single_category.name }</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{ single_category.slug }</td>
                        </tr>
                        <tr>
                            <td>Image</td>
                            <td><img src={ `http://localhost:5050/images/categories/${ single_category.image }` } alt="" /></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {
                                single_category.status ? <td>True</td> : <td>False</td>
                            }
                            
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewCategory;