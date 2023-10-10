import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
    return (
        
        <div className=''>
            <h1 className="text-3xl md:text-6xl font-thin text-center mt-5">Our Team</h1>
            <div className='flex justify-around gap-6 mt-12 ml-6'>
            <div>
                <img className='w-[70%] rounded' src="https://i.ibb.co/vxSW3D8/team-1.jpg" alt="" />
                <h1 className='text-sm md:text-xl font-serif '>Eva Miles</h1>
                <p className='text-sm md:text-normal'>Stylist</p>
            </div>
            <div>
                <img className='w-[70%] rounded' src="https://i.ibb.co/mGkBwtw/team-2.jpg" alt="" />
                <h1 className='text-sm md:text-xl font-serif'>
                    Alan Smith</h1>
                <p className='text-sm md:text-normal'>organizer</p>
            </div>
            <div>
                <img className='w-[70%] rounded' src="https://i.ibb.co/s16p54N/team-3.jpg" alt="" />    
                <h1 className='text-sm md:text-xl font-serif'>
                   Nataly jones</h1>
                <p className='text-sm md:text-normal'>agent</p>   
            </div>
            </div>
        
            <div className='flex justify-around gap-6 mt-12 mb-10 ml-6'>
            <div>
                <img className='w-[70%] rounded' src="https://i.ibb.co/y5gBbxs/team-4.jpg" alt="" />
                <h1 className='text-sm md:text-xl font-serif'>Tom Lewis</h1>
                <p className='text-sm md:text-normal'>Weeding Planner</p>
            </div>
            <div>
                <img className='w-[70%] rounded' src="https://i.ibb.co/4S4P7zz/team-5.jpg" alt="" />
                <h1 className='text-sm md:text-xl font-serif'>
                    Anna Green</h1>
                <p className='text-sm md:text-normal'>Creative director</p>
            </div>
            <div>
                <img className='w-[70%] rounded' src="https://i.ibb.co/Ph3wkSy/team-6.jpg" alt="" />    
                <h1 className='text-sm md:text-xl font-serif '>
                    David Brown</h1>
                <p className='text-sm md:text-normal'>Photographer</p>   
            </div>
            </div>

            <div >
                <div >
                   <img className='mx-auto my-14' src="https://i.ibb.co/jrRnm4v/cropped-logo.png" alt="" />
                </div>
                <h1 className='text-center text-md font-mono font-extrabold'>Contact With us</h1>
                <div className='flex text-sm md:text-normal  justify-center gap-4 md:gap-32 my-14'>
                    <p>ALAN SMITH</p>
                    <p>TOM LEWIS</p>
                    <p>EVA MILES</p>
                    <p>NATALY JONES</p>
                </div>
                <div className='flex justify-center gap-24 my-14'>
                  <BsFacebook></BsFacebook>
                  <FaInstagramSquare></FaInstagramSquare>
                  <FaLinkedinIn></FaLinkedinIn>
                  <BsTwitter></BsTwitter>
                  
                </div>
                 <p className='text-sm md:text-xl text-center text-slate-400 my-14'>Copyright © 2019 Taysta by OpalTheme. All Rights Reserved</p>
            </div>
            
    </div>
    );
};

export default Team;