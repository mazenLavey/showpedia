import React, { useContext } from "react";
import { nanoid } from 'nanoid';
import ShowsSearchResultCSS from './css/ShowsSearchResult.module.css';
import {SearchContext} from '../../context/SearchContext';
import ShowCard from '../../components/ShowCard';
import ShowCardSkeleton from '../../components/ShowCardSkeleton';
import useMedia from '../../hooks/useMedia';

const ShowsSearchResult = ()=>{
    const {showsData, showsAreLoaded} = useContext(SearchContext);
    const {isMobileScreen, isTabletScreen} = useMedia();

    function renderList() {
        if(showsAreLoaded) {
            const elements = showsData.map( el=>{
                return <ShowCard key={nanoid()} data={el.show}/>
            });
            return elements;
        };
    };

    return (
        <div className={`${ShowsSearchResultCSS.wrapper} section-margin`}>
            {showsAreLoaded? renderList() : <ShowCardSkeleton cards={isMobileScreen? 2 : (isTabletScreen? 4 : 8)}/>}
        </div>
    );
};

export default ShowsSearchResult;