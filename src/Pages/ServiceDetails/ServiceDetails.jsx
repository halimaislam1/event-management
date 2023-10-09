import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const details = events?.find(event => event.id == id);
    console.log(details);

    return (
        <div className='mt-2'>
            <h2 className="text-4xl text-center font-bold mb-7">{details.title}</h2>
            <img className='w-[60%] h-[20%] mb-4 mx-auto' src={details.img} alt="" />
            <p className=''>{details.service_details}</p>
            <Reviews></Reviews>
        </div>
        
    );
};

export default ServiceDetails;