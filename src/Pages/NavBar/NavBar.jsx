import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Aabout'>About</NavLink></li>
        <li><NavLink to='/career'>details</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className=' w-40 ' src="https://i.ibb.co/TKzdHTH/logo-2-1.jpg" alt="" />
                <p className='font-bold text-md '>Social Event  Management</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <img className='w-12' src="https://i.ibb.co/ZGCkZP7/User-Logo1.jpg" alt="" />
                <a className="btn bg-black text-white">Login</a>
            </div>
        </div>
    );
};

export default NavBar;


//https://i.ibb.co/3Yycjvk/Event-Logo.jpg
// https://i.ibb.co/KKqfgyC/event-manage-logo.jpg
//https://i.ibb.co/sqdT5TF/event-pic.jpg
//https://i.ibb.co/qDpGwcj/creative-logo.jpg
//{/* <img className=' w-40 ' src="https://i.ibb.co/fCKYkyt/logo3.png" alt="logo" />  */}
/* <img className='w-36 h-36 rounded-full' src="https://i.ibb.co/KKqfgyC/event-manage-logo.jpg" alt="logo" /> */