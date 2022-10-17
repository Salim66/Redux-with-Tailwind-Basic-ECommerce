import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, CloseButton } from 'react-bootstrap';
import './ViewProduct.scss';
import { htmlspecialchars } from '../../../../utility/specialCharsDecode.js';

const ViewProduct = ({ view, setView }) => {

    // view product close
    const handleViewClose = () => setView(false);

    // get single product form redux
    const { single_product } = useSelector( state => state.product );
    // console.log(single_product);
  return (
    <>
        <Modal show={ view } onHide={ handleViewClose } size="lg">
            <Modal.Header  closeButton>
                <Modal.Title>Single Product View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='w-1/4'>Product Info</th>
                            <th className='w-3/4'>Product Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{ single_product.name }</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{ single_product.slug }</td>
                        </tr>
                        <tr>
                            <td>Regular Price</td>
                            <td>${ single_product.regular_price }</td>
                        </tr>
                        <tr>
                            <td>Sale Price</td>
                            <td>${ single_product.sale_price }</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>{ single_product.stock } pic</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{ single_product.rating }</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                            {
                                single_product.categories && single_product.categories.map((category, cat) => (
                                    <span className="bg-sky-500 py-px px-1 text-white rounded-sm mr-px" key={cat}>{ category.name }</span>
                                ))
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>
                            {
                                single_product.brands && single_product.brands.map((brand, b) => (
                                    <span key={b} className="bg-orange-500 py-px px-1 text-white rounded-sm mr-px">{ brand.name }</span>
                                ))
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Tag</td>
                            <td>
                            {
                                single_product.tags && single_product.tags.map((tag, t) => (
                                    <span key={t} className="bg-indigo-500 py-px px-1 text-white rounded-sm mr-px">{ tag.name }</span>
                                ))
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>
                            {
                                single_product.colors && single_product.colors.map((color, c) => (
                                    <span key={c} className="bg-cyan-500 py-px px-1 text-white rounded-sm mr-px">{ color.name }</span>
                                ))
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>
                            {
                                single_product.sizes && single_product.sizes.map((size, s) => (
                                    <span key={s} className="bg-rose-500 py-px px-1 text-white rounded-sm mr-px">{ size.name }</span>
                                ))
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Featured Image</td>
                            <td><img src={ `http://localhost:5050/images/products/${ single_product.featured_image }` } alt="" /></td>
                        </tr>
                        <tr>
                            <td>Gallery Image</td>
                            <td className='flex gap-3'>
                                {
                                    single_product.gallery_image && single_product.gallery_image.map((gall, s) => (
                                        <img src={ `http://localhost:5050/images/products/${ gall }` } alt="" />
                                    )) 
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Short Description</td>
                            <td>{ single_product.short_desc }</td>
                        </tr>
                        <tr>
                            <td>Long Description</td>
                            <td>{ htmlspecialchars(single_product.long_desc) }</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {
                                single_product.status ? <td>True</td> : <td>False</td>
                            }
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default ViewProduct;