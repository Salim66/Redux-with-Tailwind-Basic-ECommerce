import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import '../../pages/shop/Header/Header.scss';

const MiniHeader = () => {
  return (
    <>
        <div className="bg-bgColor w-full flex justify-center items-center py-3 sticky left-0 top-0 z-50">
            <header className='header flex w-11/12 justify-between text-white'>

                <div className="logo">
                    <Link to="/"><img src={ Logo } alt="" className='max-w-full block' /></Link>
                </div>

                <div className="menu__ flex justify-between items-center">
                    <ul className='flex justify-center items-center list-none'>
                        <li className="active"><Link to="/shop" className='hover:text-cta hover:transition-all duration-300 hover:ease-in-out'>Shop</Link></li>
                        <li><a href="#" className='hover:text-cta hover:transition-all duration-300 hover:ease-in-out'>Admin</a></li>
                        <li><a href="#" className='hover:text-cta hover:transition-all duration-300 hover:ease-in-out'>Sale</a></li>
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
        </div>
        
    </>
  )
};

export default MiniHeader;