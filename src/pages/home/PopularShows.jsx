import PreLoading from '../../components/PreLoading';
import StreamingList from './StreamingList';
import TopRatedShows from './TopRatedShows';

const PopularShows = ()=>{
    return (
        <section style={{position: "relative"}}>
            <PreLoading />
            <StreamingList />
            <TopRatedShows />
        </section>
    );
};

export default PopularShows;