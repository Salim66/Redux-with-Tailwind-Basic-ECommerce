import React from 'react';
import { Modal } from 'react-bootstrap';
import './ViewTag.scss';

const ViewTag = ({ view, setView }) => {

    // view brand close
    const handleViewClose = () => setView(false);

  return (
    <>
        <Modal show={ view } onHide={ handleViewClose }>
            <Modal.Header  closeButton>
                <Modal.Title>Single Tag View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Tag Info</th>
                            <th>Tag Value</th>
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

export default ViewTag;