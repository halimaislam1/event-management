import Marquee from "react-fast-marquee";

const Photography = () => {
    return (
        <div className='mt-28 mb-10'>
            <img className='mx-auto bg-pink-100 ' src="https://i.ibb.co/D4HVkFD/Photography-logo-removebg-preview.png" alt="" />
            <h1 className='text-5xl text-center font-bold text-red-400 mb-12 '>Our Event Photography</h1>
            <Marquee pauseOnHover={true} speed={50} >
                <div className="mr-16">
                    <div className="card rounded-lg mb-5  w-72 bg-base-100 shadow-lg shadow-red-500">
                        <figure><img className="w-[]" src="https://i.ibb.co/RQvGVx5/Photograph1.jpg" alt="Shoes" /></figure>
                        <div className=" items-center">
                            <p className="text-center">Experience your dream wedding,baby-shower party in this exquisite venue, adorned with timeless decor and offering impeccable service. </p>
                            <div className="card-actions justify-center mb-2 flex ">
                                <button className="btn mt-2 bg-red-400 text-white ">40% OFF</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mr-16">
                    <div className="card rounded-lg mb-5  w-72 bg-base-100 shadow-lg shadow-red-500">
                        <figure><img className="w-[65%] " src="https://i.ibb.co/DVxdzxJ/birthday-1.jpg" alt="Shoes" /></figure>
                        <div className=" items-center">
                            <p className="text-center"> Experience your dream birthday ,engagement party in this exquisite venue, adorned with timeless decor and offering impeccable service. </p>
                            <div className="card-actions justify-center mb-2 flex ">
                                <button className="btn mt-2 bg-red-400 text-white ">20% OFF</button>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="mr-16">
                    <div className="card rounded-lg mb-5  w-72 bg-base-100 shadow-lg shadow-red-500">
                        <figure><img className="w-[100%]" src="https://i.ibb.co/LxwgLgk/Anneversery.jpg" alt="Shoes" /></figure>
                        <div className=" items-center">
                            <p className="text-center"> Experience your dream wedding,birthday,engagement,baby-shower,retirement  & anneversery in this exquisite venue, adorned with timeless decor and offering impeccable service. </p>
                            <div className="card-actions justify-center mb-2 flex ">
                                <button className="btn mt-2 bg-red-400 text-white ">30% OFF</button>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="mr-16">
                    <div className="card rounded-lg mb-5  w-72 bg-base-100 shadow-lg shadow-red-500">
                        <figure><img className="w-[100%]" src="https://i.ibb.co/vmWNY8V/Engagement.jpg" alt="Shoes" /></figure>
                        <div className=" items-center">
                            <p className="text-center"> Experience your dream engagement,baby-shower etc in this exquisite venue, adorned with timeless decor and offering impeccable service. </p>
                            <div className="card-actions justify-center mb-2 flex ">
                                <button className="btn mt-2 bg-red-400 text-white ">15% OFF</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mr-16 ">
                    <div className="card rounded-lg mb-5  w-72 bg-base-100 shadow-lg shadow-red-500">
                        <figure><img className="w-[100%]" src="https://i.ibb.co/fqfLsp4/Baby-shower.jpg" alt="Shoes" /></figure>
                        <div className=" items-center">
                            <p className="text-center"> Experience your dream engagement in this exquisite venue, adorned with timeless decor and offering impeccable service. </p>
                            <div className="card-actions justify-center mb-2 flex ">
                                <button className="btn mt-2 bg-red-400 text-white ">15% OFF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Photography;