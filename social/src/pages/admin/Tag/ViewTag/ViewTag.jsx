import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './ViewTag.scss';

const ViewTag = ({ view, setView }) => {

    // view brand close
    const handleViewClose = () => setView(false);

    // get single tag form redux
    const { single_tag } = useSelector( state => state.tag );

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
                            <td>{ single_tag.name }</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{ single_tag.slug }</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {
                                single_tag.status ? <td>True</td> : <td>False</td>
                            }
                            
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewTag;