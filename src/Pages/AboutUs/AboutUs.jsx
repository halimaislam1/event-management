import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div data-aos="fade-up">
            <div style={{backgroundImage:"url(https://i.ibb.co/wzCKG5Z/Extra-bg-banner2.jpg)"}}>
            <div className="card lg:flex-row-reverse mb-10 mt-10  " >
                <figure><img src="https://i.ibb.co/DW6dhdg/extra-route-banner.jpg" alt="Album" /></figure>
                <div className="card-body ">
                    <h1 className="card-title font-serif text-5xl">About us</h1>
                    <p className='font-md text-gray-400'>discover our story</p>
                    <p className='text-gray-400 mb-20'>Apparently we had reached a great height in the atmosphere,<br /> for the sky was a dead black, and the stars had ceased to twinkle. <br /> By the same illusion which lifts the horizon of the sea to the level of <br /> the spectator on a hillside…
                    <button className='text-red-500'>Read Full Story</button>
                    </p>       
                </div>
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

export default AboutUs;