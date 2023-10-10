import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
            <div className='w-full'>
                <Footer></Footer>
            </div>

        </div>

    );
};

export default Root;