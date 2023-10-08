import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='mt-20 text-3xl text-center font-bold'>Our Event Managent reviews</h1>
            <div className='mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                <div className='card border w-52 mt-5 md:mb-20 mx-auto md:ml-60 '>
                    <img className='w-48 rounded-lg mb-5  mx-auto'
                        src="https://i.ibb.co/K0zfJ8F/Review.jpg" alt="" />
                    <p className='text-center mb-1'>Jhon Smith</p>
                    <p className='text-center mb-2 '>Reviws</p>
                    <div className="rating gap-1 mb-3 flex justify-center">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                    </div>
                </div>

                <div className='card border w-52 md:mt-32 md:ml-32 md:mb-10  mx-auto'>
                    <img className='w-40 h-36 rounded-lg mb-5  mx-auto'
                        src="https://i.ibb.co/N1zy0R5/Reviews2.jpg" alt="" />
                    <p className='text-center mb-1'>Pronali roy</p>
                    <p className='text-center mb-1 '>Reviws</p>
                    <div className="rating gap-1 mb-3 flex justify-center">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                    </div>
                </div>
                <div className='card border w-48 h-72  md:w-60 ml-28  md:ml-36 lg:ml-0 lg:w-48 mb-6 mt-5'>
                    <img className='w-48 rounded-lg mb-5 mx-auto'
                        src="https://i.ibb.co/JBqrJzd/positive-female-student-glasses-doing-homework.jpg" alt="" />
                    <p className='text-center mb-1'>Priyanka</p>
                    <p className='text-center mb-1 '>Reviws</p>
                    <div className="rating gap-1 mb-3 flex justify-center">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;