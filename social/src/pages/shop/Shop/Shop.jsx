import React, { useState } from 'react';
import Header from '../Header/Header';
import './Shop.scss';
import product_card from '../../../product_card';
import { Link } from 'react-router-dom';
import QuickView from '../../../components/QuickView/QuickView';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { singleProduct } from '../../../redux/product/action';

const Shop = () => {

  const [quickView, setQuickView] = useState(false);

  // call redux dispatch
  const dispatch = useDispatch();

  const handleQuickViewModal = (id) => {
    setQuickView(true);
    dispatch(singleProduct(id));
  };

  // get data form redux
  const { new_products } = useSelector( state => state.product );

  let productData = new_products.map((item, index) => {
    let product_price = 0;
    if(item.sale_price){
      product_price = <span><small className='line-through text-red-500'>{ item.regualr_price }</small> { item.sale_price }</span>
    }else {
      product_price = <span>{ item.regualr_price }</span>;
    }

    let rating = '';
    for(let i=0; i<5; i++){
        if(i<item.rating){
            rating += '<i className="fa fa-star colored"></i>'
        }else {
            rating += '<i className="fa fa-star"></i>'
        }
    }
    
    return <div className='col-12 col-sm-6 col-lg-4 mb-10' key={index}>
      <div className="card">
        <Link to={`/single-shop/${item.slug}`} className="card_img">
          <img src={ `http://localhost:5050/images/products/${ item.featured_image }` } alt="" />
        </Link>
        <div className="card_body">
          <h2>{ item.name.substring(0, 21) }...</h2>
          <p>{ item.short_desc.substring(0, 66) }...</p>
          <div className="price_section">
            <span className='product_rating product_rating_shop'>
                {/* <i className="fa fa-star colored"></i>
                <i className="fa fa-star colored"></i>
                <i className="fa fa-star colored"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i> */}
                { parse(rating) }
            </span>
            <div className="price price_shop">
              <span>$</span>
              <h3>{ product_price }</h3>
            </div>
          </div>
        </div>
        <div className="cta_group">
          <div className="button_atc" onClick={ () => handleQuickViewModal(item._id) } >Quick View</div>
          <div className="button_atc">Add To Cart</div>
        </div>
      </div>
    </div>
 });

  return (
    <>
        <section className="shop__section w-full font-raleway">
          <div className="product_list_container">
            <div className="container_r">
              <h1 className='mb-14 flex justify-center text-3xl text-bgColor uppercase'>New Collections</h1>
              <div className="row row__container">
                { productData }
              </div>
              <div className="row mt-4 pb-4">
                <div className="col-12">
                  <div className="loader">
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                    <div className="loader__text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <QuickView quickView={ quickView } setQuickView={ setQuickView } />
    </>
  )
};

export default Shop;