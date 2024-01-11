import React, { useContext, useEffect, useState } from "react";
import ShowCard from 'components/ShowCard';
import ShowCardSkeleton from 'components/ShowCardSkeleton';
import useMedia from 'hooks/useMedia';
import { DefaultDataContext } from 'context/DefaultDataContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import BeatLoader from 'react-spinners/BeatLoader';
import ShowsFilterBar from './ShowsFilterBar';
import SeriesNotFound from "./SeriesNotFound";
import './css/ShowsList.css';

const SLICE_AMOUNT = 30;

const ShowsList = ()=>{
    const { 
        showsList,
        fetchMoreShows,
        hasMore,
        isFilterActive,
        filteredShowsList,
    } = useContext(DefaultDataContext);

    const { isMobileScreen, isTabletScreen } = useMedia();
    const [ storedShows, setStoredShows ] = useState([]);

    const renderShows = ()=>{
        const data = isFilterActive ? filteredShowsList : storedShows;

        const elements = data.filter(el => el.image && el.name);

        if(elements.length === 0) {
            return <SeriesNotFound />;
        }

        return elements.map( el => <ShowCard key={el.id} data={el}/>);
    };

    useEffect(()=>{
        if(!showsList) return;

        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showsList]);

    const fetchData = () => {
        if(!showsList) return;
        
        if(storedShows.length < showsList.length) {
            const slicedData = showsList.slice(storedShows.length, storedShows.length + SLICE_AMOUNT);
            setStoredShows(prev => [...prev, ...slicedData]);

        } else if(storedShows.length > 0) {
            fetchMoreShows();
        }
    }

    const fetchFilteredData = () => {
        if(!showsList) return;

        fetchMoreShows();
    }

    if(showsList.length === 0) {
        return(
            <div className="ShowsList__wrapper">
                <ShowCardSkeleton cards={isMobileScreen? 2 : (isTabletScreen? 4 : 8)}/>
            </div>
        )
    }

    return (
        <section>
            <ShowsFilterBar />
            <div className="section-margin">
                <InfiniteScroll
                            dataLength={isFilterActive ? filteredShowsList : storedShows.length}
                            next={isFilterActive ? fetchFilteredData : fetchData}
                            hasMore={hasMore}
                            loader={<BeatLoader 
                                className="ShowsList__InfiniteScrollLoader" 
                                color="#e21221" 
                                style={{ visibility: filteredShowsList.length === 0 || storedShows.length === 0? 'hidden': 'visible'}} />} >
                            <div className="ShowsList__wrapper">
                                { renderShows() }
                            </div>
                </InfiniteScroll>
            </div>
        </section>
    );
};

export default ShowsList;