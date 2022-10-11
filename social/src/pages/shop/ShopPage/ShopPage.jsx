import React from 'react';
import './ShopPage.scss';
import product_card from '../../../product_card';
import MiniHeader from '../../../components/MiniHeader/MiniHeader.jsx';
import Footer from '../../../components/Footer/Footer';

const ShopPage = () => {

    let productData = product_card.map((item, index) => {
        let product_price = 0;
        if(item.sale_price){
          product_price = <span><small className='line-through text-red-500'>{ item.regualr_price }</small> { item.sale_price }</span>
        }else {
          product_price = <span>{ item.regualr_price }</span>;
        }
        return <div className='col-12 col-sm-6 col-lg-4 mb-10' key={index}>
          <div className="card">
            <div className="card_img">
              <img src={ item.photo } alt="" />
            </div>
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
              <div className="button_atc">Quick View</div>
              <div className="button_atc">Add To Cart</div>
            </div>
          </div>
        </div>
    });

  return (
    <>
        <MiniHeader />
        <section className="shop__section w-full font-raleway">
            <div className="product_list_container">
            <div className="row">

                <div className="col-md-3">
                <div className="search_widget">
                    <h2 className='my-2 text-bgColor text-xl'>Search Product</h2>
                    <input type="search" className='w-full py-1 px-2 rounded-sm focus:outline-none' />
                </div>
                <div className="price_widget mt-5">
                    <h2 className='my-2 text-bgColor text-xl'>Price</h2>
                    <div className='price_search'>
                        <input type="range" min={10} max={10000} />
                        <input type="range" min={10} max={10000} />
                    </div> 
                </div>
                <div className="category_widget mt-5">
                    <h2 className='my-2 text-bgColor text-xl'>Categories</h2>
                    <label className='text-gray-600 block'><input type="checkbox" value="Men" /> Men</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Women" /> Women</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Kids" /> Kids</label>
                </div>
                <div className="brands_widget mt-5">
                    <h2 className='my-2 text-bgColor text-xl'>Brands</h2>
                    <label className='text-gray-600 block'><input type="checkbox" value="Adidas" /> Adidas</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Nike" /> Nike</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Puma" /> Puma</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Rebook" /> Rebook</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Apex" /> Apex</label>
                </div>
                <div className="tags_widget mt-5">
                    <h2 className='my-2 text-bgColor text-xl'>Tags</h2>
                    <label className='text-gray-600 block'><input type="checkbox" value="Eid" /> Eid</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Puja" /> Puja</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Boiskh" /> Boiskh</label>
                </div>
                <div className="sizes_widget mt-5">
                    <h2 className='my-2 text-bgColor text-xl'>Sizes</h2>
                    <label className='text-gray-600 block'><input type="checkbox" value="5" /> 5</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="6" /> 6</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="7" /> 7</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="8" /> 8</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="9" /> 9</label>
                </div>
                <div className="colors_widget mt-5">
                    <h2 className='my-2 text-bgColor text-xl'>Colors</h2>
                    <label className='text-gray-600 block'><input type="checkbox" value="Black" /> Black</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Blue" /> Blue</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Bronze" /> Bronze</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Brown" /> Brown</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Green" /> Green</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Gray" /> Gray</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Gold" /> Gold</label>
                    <label className='text-gray-600 block'><input type="checkbox" value="Maroon" /> Maroon</label>
                </div>
                </div>

                <div className="col-md-9">
                <div className="container_r">
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

            </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default ShopPage