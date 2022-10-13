import React from 'react';
import './TopHeader.scss';
import Admin from '../../../assets/images/users/admin.png';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <>
        <div className="admin__header px-5 py-2">
            <div className="left__header">
                <Link to="/"><img src={ Logo } alt="" className='w-20 h-8 cursor-pointer' /></Link>
            </div>
            <div className="right__header">
                <img src={ Admin } alt="" className='ring-1 ring-bgColor cursor-pointer' />
            </div>
        </div>
    </>
  )
};

export default TopHeader;