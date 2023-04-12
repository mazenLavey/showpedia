import PopularActors from './PopularActors';
import StreamingList from './StreamingList';
import TopRatedShows from './TopRatedShows';


const DefaultPage = ({searchType})=>{
    return (
        <>
        {searchType === "byShow" ? 
            <>
                <StreamingList />
                <TopRatedShows />
            </>
            : 
            <PopularActors />
        }
        </>
    );
};

export default DefaultPage;