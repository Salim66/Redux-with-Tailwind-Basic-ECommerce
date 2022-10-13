import React from 'react';
import { Modal, CloseButton } from 'react-bootstrap';
import './ViewBrand.scss';

const ViewBrand = ({ view, setView }) => {

    // view brand close
    const handleViewClose = () => setView(false);

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
                            <td>T-Shirt</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewBrand;