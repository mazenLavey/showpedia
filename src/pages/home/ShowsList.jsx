import React, { useContext, useEffect, useState } from "react";
import ShowCard from 'components/ShowCard';
import ShowCardSkeleton from 'components/ShowCardSkeleton';
import useMedia from 'hooks/useMedia';
import { DefaultDataContext } from "context/DefaultDataContext";
import InfiniteScroll from 'react-infinite-scroll-component';
import BeatLoader from "react-spinners/BeatLoader";
import './css/ShowsList.css';

const SLICE_AMOUNT = 30;

const ShowsList = ()=>{
    const { showsList, fetchMoreShows, hasMore } = useContext(DefaultDataContext);
    const { isMobileScreen, isTabletScreen } = useMedia();
    const [ storedData, setStoredData ] = useState([]);

    const renderNewElements = ()=>{
        const elements = storedData.filter(el => el.image && el.name).map( el=> <ShowCard key={el.id} data={el}/>);
        return elements;
    };


    useEffect(()=>{
        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showsList]);

    const fetchData = () => {
        if(!showsList) return;

        if(storedData.length < showsList.length) {
            const slicedData = showsList.slice(storedData.length, storedData.length + SLICE_AMOUNT);
            setStoredData(prev => [...prev, ...slicedData]);

        } else {
            fetchMoreShows();
        }
    }

    return (
        <section >
            <h2>Shows</h2>
            <div  className="section-margin">
                {showsList.length > 0? 
                    <InfiniteScroll
                        dataLength={storedData.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<BeatLoader className="ShowsList__InfiniteScrollLoader" color="#e21221" />}
                    >
                        <div className="ShowsList__wrapper">
                            { renderNewElements() }
                        </div>
                    </InfiniteScroll>
                    : 
                    <div className="ShowsList__wrapper">
                        <ShowCardSkeleton cards={isMobileScreen? 2 : (isTabletScreen? 4 : 8)}/>
                    </div>
                }
            </div>
        </section>
    );
};

export default ShowsList;