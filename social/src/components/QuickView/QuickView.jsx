import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import './QuickView.scss';
import Shoe1 from '../../assets/images/products/shoe1.webp';
import Shoe2 from '../../assets/images/products/shoe2.webp';
import Shoe3 from '../../assets/images/products/shoe3.webp';
import Shoe4 from '../../assets/images/products/shoe4.webp';
import Shoe5 from '../../assets/images/products/shoe5.webp';


const QuickView = ({ quickView, setQuickView }) => {

    const handleQuickViewCloseModal = () => setQuickView(false);

    const handleSmallImage = (e) => {
        // set Big Image
        let img_url = e.target.getAttribute('src');
        let big_img = document.getElementById("big__img");
        big_img.setAttribute('src', img_url);
        
        // set active class
        e.target.parentElement.querySelectorAll( ".active" ).forEach( e =>
            e.classList.remove( "active" ) );
    
        e.target.classList.add( "active" );

    }

  return (
    <>
        <Modal show={quickView} onHide={ handleQuickViewCloseModal } size="lg">
            <Modal.Body>
                <Row>
                    <Col sm={6} md={6} lg={6} className="flex gap-6">
                        <div className="left__left">
                            <img src={ Shoe2 } alt="" className='small__img' onClick={ handleSmallImage } />
                            <img src={ Shoe3 } alt="" className='small__img' onClick={ handleSmallImage } />
                            <img src={ Shoe4 } alt="" className='small__img' onClick={ handleSmallImage } />
                            <img src={ Shoe5 } alt="" className='small__img' onClick={ handleSmallImage } />
                        </div>
                        <div className="left__right">
                            <img src={ Shoe1 } alt="" className='big__img' id='big__img' />
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <div className="details">
                            <p className='text-bgColor'>Shoes</p>
                            <h2 className='product_name text-lg font-semibold'>Thar-01 Grey Sneakers,Sports,Training,Gym,Walking,Stylish For Men</h2>
                            <span className='product_rating text-sm'>
                                <span className='product_rating block mt-1'>
                                    <i className="fa fa-star colored"></i>
                                    <i className="fa fa-star colored"></i>
                                    <i className="fa fa-star colored"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className='text-2xl font-bold my-1 block'>$ <small className='line-through text-red-500'>220</small> 150</span>
                            </span>
                            <hr className='text-gray-400' />
                            <div className="short__description mt-3">
                                <h3 className='text-base font-semibold'>Short description</h3>
                                <p className='font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sequi placeat dicta alias exercitationem harum!</p>
                            </div>
                            <div className="all__colors my-3">
                                <h4 className='text-base font-normal opacity-70'>Available colors</h4>
                                <ul>
                                    <li>Black</li>
                                    <li className='active'>Blue</li>
                                    <li>Bronze</li>
                                    <li>Brown</li>
                                    <li>Green</li>
                                </ul>
                            </div>
                            <div className="all__sizes my-3">
                                <h4 className='text-base font-normal opacity-70'>Available sizes</h4>
                                <ul>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li className='active'>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                </ul>
                            </div>
                            <div className="cta_group_d">
                                <div className="button_atc_d">Add To Cart</div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default QuickView;