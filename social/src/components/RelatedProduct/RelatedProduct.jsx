import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/shop/Shop/Shop.scss';
import product_card from '../../product_card';


const RelatedProduct = () => {

    let productData = product_card.map((item, index) => {

        if(index === 4){
            return;
        }

        let product_price = 0;
        if(item.sale_price){
          product_price = <span><small className='line-through text-red-500'>{ item.regualr_price }</small> { item.sale_price }</span>
        }else {
          product_price = <span>{ item.regualr_price }</span>;
        }
        return <div className='col-12 col-sm-6 col-lg-3 mb-10' key={index}>
          <div className="card">
            <Link to='/single-shop' className="card_img">
              <img src={ item.photo } alt="" />
            </Link>
            <div className="card_body">
              <h2>{ item.product_name }</h2>
              <p>{ item.description }</p>
              <div className="price_section">
                <span className='product_rating'>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </span>
                <div className="price">
                  <span>{ item.currency }</span>
                  <h3>{ product_price }</h3>
                </div>
              </div>
            </div>
            <div className="cta_group">
              <div className="button_atc">Add To Cart</div>
            </div>
          </div>
        </div>
    });

  return (
    <>
        <div className="container_r">
            <h1 className='mb-14 flex justify-center text-3xl text-bgColor uppercase'>Related Products</h1>
            <div className="row row__container">
                { productData }
            </div>
        </div>
    </>
  )
};

export default RelatedProduct;