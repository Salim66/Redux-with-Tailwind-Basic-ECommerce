import React, { useState } from 'react';
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

const SingleShop = () => {

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
                                     <img src={ Shoe2 } alt="" className='small__img' onClick={ handleSmallImage } />
                                     <img src={ Shoe3 } alt="" className='small__img' onClick={ handleSmallImage } />
                                     <img src={ Shoe4 } alt="" className='small__img' onClick={ handleSmallImage } />
                                     <img src={ Shoe5 } alt="" className='small__img' onClick={ handleSmallImage } />
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
                                            <li onClick={ handleColorSelect }>Black</li>
                                            <li onClick={ handleColorSelect }>Blue</li>
                                            <li onClick={ handleColorSelect }>Bronze</li>
                                            <li onClick={ handleColorSelect }>Brown</li>
                                            <li onClick={ handleColorSelect }>Green</li>
                                        </ul>
                                    </div>
                                    <div className="all__sizes my-3">
                                        <h4 className='text-base font-normal opacity-70'>Available sizes</h4>
                                        <ul>
                                            <li onClick={ handleSizeSelect }>5</li>
                                            <li onClick={ handleSizeSelect }>4</li>
                                            <li onClick={ handleSizeSelect }>6</li>
                                            <li onClick={ handleSizeSelect }>7</li>
                                            <li onClick={ handleSizeSelect }>8</li>
                                            <li onClick={ handleSizeSelect }>9</li>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et voluptatem modi expedita enim voluptate praesentium error earum nulla similique, laborum doloremque. Quo ea ex quas ratione atque doloremque inventore molestiae fugiat nam ipsa aliquam quidem mollitia architecto repudiandae iste dignissimos vitae, quaerat fugit praesentium suscipit incidunt assumenda voluptate voluptatum! Eaque nihil, ullam optio officia eveniet quibusdam nemo assumenda asperiores id debitis voluptatum illum laboriosam! Quae assumenda asperiores, iure impedit consequuntur dolorem, porro numquam libero sed eaque aut? Quos alias consequuntur odit tenetur recusandae nostrum atque consectetur earum! A architecto obcaecati quae itaque officia voluptatum laudantium dignissimos, temporibus voluptatibus suscipit.</p>
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