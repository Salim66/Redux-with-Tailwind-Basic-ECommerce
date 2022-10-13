import React from 'react';
import { Modal, CloseButton } from 'react-bootstrap';
import './ViewProduct.scss';

const ViewProduct = ({ view, setView }) => {

    // view product close
    const handleViewClose = () => setView(false);

  return (
    <>
        <Modal show={ view } onHide={ handleViewClose }>
            <Modal.Header  closeButton>
                <Modal.Title>Single Product View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product Info</th>
                            <th>Product Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>T-Shirt</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewProduct;