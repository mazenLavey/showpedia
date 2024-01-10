import Actors from './Actors';
import Shows from './Shows';

const DefaultPage = ({searchType})=>{
    return (
        <div>
        {searchType === "byShow" ? 
            <Shows />
            : 
            <Actors />
        }
        </div>
    );
};

export default DefaultPage;