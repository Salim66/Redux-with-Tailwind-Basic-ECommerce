import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, CloseButton } from 'react-bootstrap';
import './ViewBrand.scss';

const ViewBrand = ({ view, setView }) => {

    // view brand close
    const handleViewClose = () => setView(false);

    // get single brand form redux
    const { single_brand } = useSelector( state => state.brand );

  return (
    <>
        <Modal show={ view } onHide={ handleViewClose }>
            <Modal.Header  closeButton>
                <Modal.Title>Single Brand View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Brand Info</th>
                            <th>Brand Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{ single_brand.name }</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{ single_brand.slug }</td>
                        </tr>
                        <tr>
                            <td>Image</td>
                            <td><img src={ `http://localhost:5050/images/brands/${ single_brand.image }` } alt="" /></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {
                                single_brand.status ? <td>True</td> : <td>False</td>
                            }
                            
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewBrand;