import PopularActors from './PopularActors';
import PopularShows from './PopularShows';

const DefaultPage = ({searchType})=>{
    return (
        <div>
        {searchType === "byShow" ? 
            <PopularShows />
            : 
            <PopularActors />
        }
        </div>
    );
};

export default DefaultPage;