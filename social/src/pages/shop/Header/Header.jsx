import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import Logo from '../../../assets/images/logo.png';
import Main from '../../../assets/images/main.png';
import Shoe1 from '../../../assets/images/shoe1.png';
import Shoe2 from '../../../assets/images/shoe2.png';
import Shoe3 from '../../../assets/images/shoe3.png';
import Shoe4 from '../../../assets/images/shoe4.png';
import {Link} from 'react-router-dom';
import { gsap } from "gsap";


const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const timeLine = gsap.timeline();



    useEffect(() => {

        if(!isActive){
            return;
        }

        timeLine.from([".bannerAdditionalBg", ".home__"], {
            duration: 1.2,
            height: 0,
            ease: "power3.inOut",
            stagger: {
                amount: .3
            }
        })
        .from("header", {
            delay: 0.2,
            y: 16,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
        })
    
        .from([".content h1", ".cta"], {
            delay: -0.4,
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
                amount: .3
            }
        })
    
        .from(".main__ img", {
            delay: -0.4,
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
    
    
        gsap.from([".slider__", ".small__product"], {
            delay: 2.4,
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
                amount: .3
            }
        })
        
    }, [isActive])
   

  return (
    <>
       <div className="header__container w-full h-screen block overflow-hidden font-raleway" >
        <div className="bannerAdditionalBg bg-cta absolute left-0 right-0 top-0 bottom-0 h-full" ref={ setIsActive }></div>
        <section className="home__ w-full block h-screen bg-bgColor relative" ref={ setIsActive }>
            <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block m-auto">

                <header className='header flex w-full justify-between text-white'>

                    <div className="logo">
                        <a href="#"><img src={ Logo } alt="" className='max-w-full block' /></a>
                    </div>

                    <div className="menu__ flex justify-between items-center">
                        <ul className='flex justify-center items-center list-none'>
                            <li className="active"><a href="#">Shop</a></li>
                            <li><a href="#">Admin</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
            
                        <div className="myAccount flex justify-center items-center uppercase">
                            <div className="item__">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="item__ cart__">
                                <i className="fa fa-cart-plus"></i>
                                <span className="cart__item bg-cta rounded inline-flex justify-center items-center ml-5 relative before:w-5 before:h-px before:bg-cta before:absolute top-1/2 -translate-y-1/2">1</span>
                            </div>
                            <div className="item__ user">
                                My account <i className="fa fa-user-o"></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu__bar w-10 flex justify-center items-center flex-col cursor-pointer">
                        <span className='bg-cta ml-auto'></span>
                        <span className='bg-cta ml-auto'></span>
                        <span className='bg-cta ml-auto'></span>
                    </div>
                </header>

                <div className="content text-center flex justify-center items-center flex-col relative">
                    <h1 className='text-white uppercase'>joyride</h1>
                    <div className="main__ absolute -translate-x-1/2 -translate-y-1/2">
                        <img src={ Main } alt='main' className='w-full block' />
                    </div>
                    <div className="cta text-white uppercase flex justify-center items-center relative ml-auto text-sm cursor-pointer">ADD TO CART +</div>
                </div>

                <div className="slider__item flex items-center justify-between">

                    <div className="slider__">
                        <div className="small__product">
                            <img src={ Shoe3 } />
                        </div>
                        <div className="product__details__">
                            <h3>Nike pegasus 37</h3>
                            <p>Running collections</p>
                            <span>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h2><small className='line-through text-red-500'>$200</small> $150</h2>
                        </div>
                        <div className="atc"><i className="fa fa-plus-circle"></i></div>
                    </div>

                    <div className="slider__">
                        <div className="small__product">
                            <img src={ Shoe1 } />
                        </div>
                        <div className="product__details__">
                            <h3>Nike pegasus 37</h3>
                            <p>Running collections</p>
                            <span>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h2>$150</h2>
                        </div>
                        <div className="atc"><i className="fa fa-plus-circle"></i></div>
                    </div>
            
                    <div className="slider__">
                        <div className="small__product">
                            <img src={ Shoe2 } />
                        </div>
                        <div className="product__details__">
                            <h3>Nike pegasus 37</h3>
                            <p>Running collections</p>
                            <span>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h2>$150</h2>
                        </div>
                        <div className="atc"><i className="fa fa-plus-circle"></i></div>
                    </div>
            
                    <div className="slider__">
                        <div className="small__product">
                            <img src={ Shoe3 } />
                        </div>
                        <div className="product__details__">
                            <h3>Nike pegasus 37</h3>
                            <p>Running collections</p>
                            <span>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h2>$150</h2>
                        </div>
                        <div className="atc"><i className="fa fa-plus-circle"></i></div>
                    </div>
            
                    <div className="slider__">
                        <div className="small__product">
                            <img src={ Shoe4 } />
                        </div>
                        <div className="product__details__">
                            <h3>Nike pegasus 37</h3>
                            <p>Running collections</p>
                            <span>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star colored"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h2>$150</h2>
                        </div>
                        <div className="atc"><i className="fa fa-plus-circle"></i></div>
                    </div>
            
                </div>                

            </div>
        </section> 
       </div>

        
    </>
  )
};

export default Header;