import React from 'react';
import './Sidebar.scss';
import { SidebarData } from './SidebarData';
import Logo from '../../../assets/images/logo.png';
import Admin from '../../../assets/images/users/admin.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <div className="admin_logo flex justify-center flex-col gap-1">
                <img src={ Admin } alt="" className='ring-1 ring-cta' />
                <h1 className='text-white text-2xl'>Salim</h1>
            </div>
            <ul className='sidebar__list font-raleway'>
                {
                    SidebarData.map((val, key) => {
                        return (
                            <Link to={ val.link } key={ key } className="list__row" id={ window.location.pathname == val.link ? "active" : "" }>
                                <div className='icon'>{ val.icon }</div>
                                <div className='title'>{ val.title }</div>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
};

export default Sidebar;