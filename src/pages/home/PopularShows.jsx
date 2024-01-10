import StreamingList from './StreamingList';
import TopRatedShows from './TopRatedShows';

const PopularShows = ()=>{
    return (
        <section style={{position: "relative"}}>
            <StreamingList />
            <TopRatedShows />
        </section>
    );
};

export default PopularShows;