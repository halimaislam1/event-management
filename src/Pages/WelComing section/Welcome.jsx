
const Welcome = () => {
    return (
        <div className='rounded-5xl mt-20'>
            {/* <h2 className="text-3xl">This is Banner Page</h2> */}
           <div className="  bg-base-150 ">
            <div className="hero-content flex-col lg:flex-row">
                
                {/* <img  src="https://i.ibb.co/xsmXf8G/banner1.jpg" className="shadow-xl
                shadow-pink-700 w-[40%]"/> */}
                <img  src="https://i.ibb.co/W2ng7r8/welcoming111.jpg" className="shadow-xl
                shadow-pink-700 w-[40%]"/>
                <div>
                    <h1 className="text-4xl  font-bold text-pink-400 ">
                        Welcome To <br /> Our Event Management!!</h1>
                    <p className="py-8 font-md">Join us for a series of unforgettable social events designed to bring joy and laughter to your life.From the elegance of weddings to the jubilation of birthday parties, the warmth of anniversaries, the excitement of engagement parties, the nostalgia of retirement gatherings, and the anticipation of baby showers  our events are crafted to create cherished memories that last a lifetime. Whether you are saying I do, blowing out the candles, toasting to love, starting a new chapter, or welcoming a new life, we invite you to share in these moments of love, happiness, and togetherness with us. Lets make memories together!</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Welcome;