import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import './QuickView.scss';
import Shoe1 from '../../assets/images/products/shoe1.webp';
import Shoe2 from '../../assets/images/products/shoe2.webp';
import Shoe3 from '../../assets/images/products/shoe3.webp';
import Shoe4 from '../../assets/images/products/shoe4.webp';
import Shoe5 from '../../assets/images/products/shoe5.webp';
import InnerImageZoom from 'react-inner-image-zoom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import parse from 'html-react-parser';


const QuickView = ({ quickView, setQuickView }) => {

    const [previewImg, setPreviewImg] = useState(Shoe1);

    // get sindle product by redux call
    const { single_product } = useSelector( state => state.product );

    useEffect(() => {
        setPreviewImg(`http://localhost:5050/images/products/${single_product.featured_image}`)
    }, [single_product]);

    const handleQuickViewCloseModal = () => setQuickView(false);


    const handleSmallImage = (e) => {
        // set Big Image

        let img_url = e.target.getAttribute('src');
        setPreviewImg(img_url);
        // let big_img = document.getElementById("big__img");
        // big_img.setAttribute('src', img_url);
        
        // set active class
        e.target.parentElement.querySelectorAll( ".active" ).forEach( e =>
            e.classList.remove( "active" ) 
        );
        e.target.classList.add( "active" );

    }

    // select colors to push active class
    const handleColorSelect = (e) => {
        e.target.parentElement.querySelectorAll( ".active" ).forEach( e =>
            e.classList.remove( "active" ) 
        );
        e.target.classList.add( "active" );
    }

    // select sizes to push active class
    const handleSizeSelect = (e) => {
        e.target.parentElement.querySelectorAll( ".active" ).forEach( e =>
            e.classList.remove( "active" ) 
        );
        e.target.classList.add( "active" );
    }

    let rating = '';
    for(let i=0; i<5; i++){
        if(i<single_product.rating){
            rating += '<i className="fa fa-star colored"></i>'
        }else {
            rating += '<i className="fa fa-star"></i>'
        }
    }

    let price = '';
    if(single_product.sale_price){
        price = <span className='text-2xl font-bold my-1 block'>$ <small className='line-through text-red-500'>{ single_product.regular_price }</small> { single_product.sale_price }</span>
    }else {
        <span className='text-2xl font-bold my-1 block'>$ { single_product.regular_price }</span>
    }

  return (
    <>
        <Modal show={quickView} onHide={ handleQuickViewCloseModal } size="lg">
            <Modal.Body>
                <Row>
                    <Col sm={6} md={6} lg={6} className="flex gap-2">
                        <div className="left__left">
                            {
                                single_product.gallery_image && single_product.gallery_image.map((sml, k) => 
                                    <img key={k} src={ `http://localhost:5050/images/products/${sml}` } alt="" className='small__img' onClick={ handleSmallImage } />
                                )
                            }
                        </div>
                        <div className="left__right">
                            {/* <img src={ Shoe1 } alt="" className='big__img' id='big__img' /> */}
                            <div className='big__img big__img-quick'>
                                <InnerImageZoom zoomType={"hover"} src={ previewImg } zoomSrc={ previewImg } alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <div className="details">
                            <p className='text-bgColor'>Shoes</p>
                            <h2 className='product_name text-lg font-semibold'>{ single_product && single_product.name  }</h2>
                            <span className='product_rating text-sm'>
                                <span className='product_rating block mt-1'>
                                    {/* <i className="fa fa-star colored"></i>
                                    <i className="fa fa-star colored"></i>
                                    <i className="fa fa-star colored"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i> */}
                                    { parse(rating) }
                                </span>
                                {/* <span className='text-2xl font-bold my-1 block'>$ <small className='line-through text-red-500'>220</small> 150</span> */}
                                { price }
                            </span>
                            <hr className='text-gray-400' />
                            <div className="short__description mt-3">
                                <h3 className='text-base font-semibold'>Short description</h3>
                                <p className='font-extralight'>{ single_product && single_product.short_desc  }</p>
                            </div>
                            <div className="all__colors my-3">
                                <h4 className='text-base font-normal opacity-70'>Available colors</h4>
                                <ul className='flex-wrap'>
                                    {/* <li onClick={ handleColorSelect }>Black</li>
                                    <li onClick={ handleColorSelect }>Blue</li>
                                    <li onClick={ handleColorSelect }>Bronze</li>
                                    <li onClick={ handleColorSelect }>Brown</li>
                                    <li onClick={ handleColorSelect }>Green</li> */}
                                    {
                                        single_product.colors && single_product.colors.map((color, c) => (
                                            <li key={c} onClick={ handleColorSelect }>{ color.name }</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="all__sizes my-3">
                                <h4 className='text-base font-normal opacity-70'>Available sizes</h4>
                                <ul className='flex-wrap'>
                                    {/* <li onClick={ handleSizeSelect }>5</li>
                                    <li onClick={ handleSizeSelect }>4</li>
                                    <li onClick={ handleSizeSelect }>6</li>
                                    <li onClick={ handleSizeSelect }>7</li>
                                    <li onClick={ handleSizeSelect }>8</li>
                                    <li onClick={ handleSizeSelect }>9</li> */}
                                    {
                                        single_product.sizes && single_product.sizes.map((size, s) => (
                                            <li key={s} onClick={ handleSizeSelect }>{ size.name }</li>
                                        ))
                                    }
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