import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import ActorCard from '../../components/ActorCard';
import { nanoid } from "nanoid";
import ActorsSearchResultCSS from './css/ActorsSearchResult.module.css';
import ActorCardSkeleton from "../../components/ActorCardSkeleton";

const ActorsSearchResult = ()=>{
    const {actorsData, actorsAreLoaded} = useContext(SearchContext);
    function renderElements() {
        if(actorsAreLoaded) {
            const elements = actorsData.map(actor =>{
                return <ActorCard key={nanoid()} data={actor}/>
            })
        return elements;
        }
    }

    return (
        <div className={ActorsSearchResultCSS.wrapper}>
            {actorsAreLoaded? renderElements() : <ActorCardSkeleton cards={8}/>}
        </div>
    );
};

export default ActorsSearchResult;