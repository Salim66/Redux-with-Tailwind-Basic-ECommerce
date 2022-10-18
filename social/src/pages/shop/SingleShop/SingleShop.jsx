import React, { useState, useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import MiniHeader from '../../../components/MiniHeader/MiniHeader';
import './SingleShop.scss';
import Shoe1 from '../../../assets/images/products/shoe1.webp';
import Shoe2 from '../../../assets/images/products/shoe2.webp';
import Shoe3 from '../../../assets/images/products/shoe3.webp';
import Shoe4 from '../../../assets/images/products/shoe4.webp';
import Shoe5 from '../../../assets/images/products/shoe5.webp';
import RelatedProduct from '../../../components/RelatedProduct/RelatedProduct';
import InnerImageZoom from 'react-inner-image-zoom';
import {  useDispatch } from 'react-redux';
import { SLUG_PRODUCT } from '../../../redux/product/actionType';
import { productFail, productRequest } from '../../../redux/product/action';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const SingleShop = () => {

    // use state
    const [single, setSindle] = useState(0);
    // console.log(single.featured_image);

    // call dispatch
    const dispatch = useDispatch();
    const { slug } = useParams();

    // preview image dynamic
    const [previewImg, setPreviewImg] = useState(Shoe1);

    // preview image select and active class push selected small image
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

    useEffect(() => {
        window.scroll(0,0);

        try {
    
            dispatch(productRequest());
            axios.get(`http://localhost:5050/api/v1/product/product-search-slug/${ slug }`)
            .then(res => {
                dispatch({
                    type: SLUG_PRODUCT
                });;
                setSindle(res.data);
                setPreviewImg(`http://localhost:5050/images/products/${res.data.featured_image}`)
                console.log(res.data);
            })
            .catch(error => {
                dispatch(productFail(error.message));
            });
            
        } catch (error) {
            dispatch(productFail(error.message));
        }

    }, []);

    let rating = '';
    for(let i=0; i<5; i++){
        if(i<single.rating){
            rating += '<i className="fa fa-star colored"></i>'
        }else {
            rating += '<i className="fa fa-star"></i>'
        }
    }

    let price = '';
    if(single.sale_price){
        price = <span className='text-2xl font-bold my-1 block'>$ <small className='line-through text-red-500'>{ single.regular_price }</small> { single.sale_price }</span>
    }else {
        <span className='text-2xl font-bold my-1 block'>$ { single.regular_price }</span>
    }

  return (
    <>
        <MiniHeader />
        <section className="product__details">
            <div className="container__ p-20">
                <div className="card__ bg-white text-bgColor hover:text-bgColor p-4 rounded-md">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6 flex gap-6">
                                <div className="left__left">
                                    {
                                        single && single.gallery_image.map((sml, k) => 
                                            <img key={k} src={ `http://localhost:5050/images/products/${sml}` } alt="" className='small__img' onClick={ handleSmallImage } />
                                        )
                                    }
                                </div>
                                <div className="left__right">
                                    {/* <img src={ Shoe1 } alt="" className='big__img' id='big__img' /> */}
                                    <div className='big__img'>
                                        <InnerImageZoom zoomType={"hover"} src={ previewImg } zoomSrc={ previewImg } alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="details">
                                    <p className='text-bgColor'>Shoes</p>
                                    <h2 className='product_name text-lg font-semibold'>{ single.name }</h2>
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
                                        <p className='font-extralight'>{ single.short_desc }</p>
                                    </div>
                                    <div className="all__colors my-3">
                                        <h4 className='text-base font-normal opacity-70'>Available colors</h4>
                                        <ul>
                                            {/* <li onClick={ handleColorSelect }>Black</li>
                                            <li onClick={ handleColorSelect }>Blue</li>
                                            <li onClick={ handleColorSelect }>Bronze</li>
                                            <li onClick={ handleColorSelect }>Brown</li>
                                            <li onClick={ handleColorSelect }>Green</li> */}
                                            {
                                                single.colors && single.colors.map((color, c) => (
                                                    <li key={c} onClick={ handleColorSelect }>{ color.name }</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="all__sizes my-3">
                                        <h4 className='text-base font-normal opacity-70'>Available sizes</h4>
                                        <ul>
                                            {/* <li onClick={ handleSizeSelect }>5</li>
                                            <li onClick={ handleSizeSelect }>4</li>
                                            <li onClick={ handleSizeSelect }>6</li>
                                            <li onClick={ handleSizeSelect }>7</li>
                                            <li onClick={ handleSizeSelect }>8</li>
                                            <li onClick={ handleSizeSelect }>9</li> */}
                                            {
                                                single.sizes && single.sizes.map((size, s) => (
                                                    <li key={s} onClick={ handleSizeSelect }>{ size.name }</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="cta_group_d">
                                        <div className="button_atc_d">Add To Cart</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__ my-5 bg-white p-3 rounded-md">
                    <div className="long__description">
                        <h2 className='text-xl font-semibold text-bgColor'>Description</h2>
                        <p>{ single && parse(single.long_desc) }</p>
                    </div>
                </div>
                <div className="related__product">
                    <RelatedProduct />
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
};

export default SingleShop;