import { GiPartyPopper } from 'react-icons/gi';
import { TbDiscountCheckFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const EventCard = ({ events }) => {
    const {id,img,title,short_description,price} = events;
    return (
        <div data-aos="fade-up" >         
            <div className="card w-96 bg-base-100 shadow-xl shadow-pink-400">
                <figure><img className="h-48 w-[85%] rounded" src={img} alt="Event-img" /></figure>
                <div className="card-body">
                    <div className=" flex items-center justify-center gap-3 text-xl font-bold">
                            {title}
                            <GiPartyPopper className="text-rose-400 text-4xl "></GiPartyPopper>
                    </div>
                    <p>{short_description}</p>
                    <div className='flex justify-between'>
                         <div className='flex gap-2 items-center text-lg'>
                            <p><TbDiscountCheckFilled className=" text-2xl"></TbDiscountCheckFilled></p>
                     <p className='font-semibold'>Price: {price}</p></div>
                         <div className="card-actions justify-end flex-row-reverse">
                         
                         <Link to={`/serviceDetails/${id}`}>
                            <button className="btn rounded-lg p-2 bg-rose-400 text-sm text-white">Service Details</button>
                         </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;