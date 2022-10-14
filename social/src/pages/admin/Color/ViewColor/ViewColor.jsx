import React from 'react';
import { Modal } from 'react-bootstrap';
import './ViewColor.scss';

const ViewColor = ({ view, setView }) => {

    // view color close
    const handleViewClose = () => setView(false);

  return (
    <>
        <Modal show={ view } onHide={ handleViewClose }>
            <Modal.Header  closeButton>
                <Modal.Title>Single Color View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Color Info</th>
                            <th>Color Value</th>
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

export default ViewColor;