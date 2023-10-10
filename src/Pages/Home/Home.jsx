import { useLoaderData } from "react-router-dom";
import EventsCard from "../EventsCard/EventCards";
import Banner from "../Banner/Banner";
import Photography from "../Photography/Photography";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    const events = useLoaderData();
    console.log(events);

    return (
        <div>
            <Banner></Banner>
            <Photography></Photography>
            <h2 className='text-5xl font-semibold text-center mt-32 text-rose-400 '>Our All Social Event  </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-3 gap-8 mt-10">
               
                 {
                    events.map(event => 
                     <EventsCard key= {event.id}
                     events = {event}></EventsCard>)
                 }
            </div> 
            <Reviews></Reviews>       
        </div>
    );
};

export default Home;