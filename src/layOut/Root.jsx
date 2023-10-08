import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
// import Header from '../Pages/Header/Header';
import Footer from '../Footer/Footer';
import Reviews from '../Pages/Reviews/Reviews';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Reviews></Reviews>
            <div className='w-full'>
                <Footer></Footer>
            </div>

        </div>

    );
};

export default Root;