import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './ViewSize.scss';

const ViewSize = ({ view, setView }) => {

    // view size close
    const handleViewClose = () => setView(false);

    // get single size form redux
    const { single_size } = useSelector( state => state.size );

  return (
    <>
        <Modal show={ view } onHide={ handleViewClose }>
            <Modal.Header  closeButton>
                <Modal.Title>Single Size View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Size Info</th>
                            <th>Size Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{ single_size.name }</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{ single_size.slug }</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {
                                single_size.status ? <td>True</td> : <td>False</td>
                            }
                            
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewSize;