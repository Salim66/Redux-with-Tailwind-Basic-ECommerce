import React from 'react';
import './Footer.scss';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className="container__footer">
                <div className="row flex justify-between text-white">
                    <div className="col-12 col-md-6 flex flex-col flex-start">
                        <div className="footer__logo mb-4">
                            <Link to="/"><img src={ Logo } alt="" /></Link>
                        </div>
                        <div className="footer__text w-2/3">
                            <p className="text text-justify hover:text-cta text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptas nesciunt dolore corporis, veniam incidunt id sit expedita quis quas?
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 flex justify-end">
                        <div className="important_link">
                            <ul>
                                <li><Link to="/">Shop</Link></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <hr className='text-cta' />
        <div className="footer__botton flex justify-center py-2 bg-bgColor">
            <p className='text-white'>© 2022-2023 <a href="#">devZone.com</a></p>
        </div>
    </>
  )
}

export default Footer