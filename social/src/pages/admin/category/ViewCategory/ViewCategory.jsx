import React from 'react';
import { Modal, CloseButton } from 'react-bootstrap';
import './ViewCategory.scss';

const ViewCategory = ({ view, setView }) => {

    // view category close
    const handleViewClose = () => setView(false);

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
                            <td>T-Shirt</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewCategory;