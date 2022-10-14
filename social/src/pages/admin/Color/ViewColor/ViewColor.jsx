import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './ViewColor.scss';

const ViewColor = ({ view, setView }) => {

    // view color close
    const handleViewClose = () => setView(false);

     // get single color form redux
     const { single_color } = useSelector( state => state.color );

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
                            <td>{ single_color.name }</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{ single_color.slug }</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {
                                single_color.status ? <td>True</td> : <td>False</td>
                            }
                            
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewColor;