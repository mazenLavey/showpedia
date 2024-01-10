import React, { useContext, useEffect, useState } from "react";
import ShowCard from 'components/ShowCard';
import ShowCardSkeleton from 'components/ShowCardSkeleton';
import useMedia from 'hooks/useMedia';
import { DefaultDataContext } from 'context/DefaultDataContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import BeatLoader from 'react-spinners/BeatLoader';
import ShowsFilterBar from './ShowsFilterBar';
import { format } from 'date-fns';
import './css/ShowsList.css';

const SLICE_AMOUNT = 30;

const ShowsList = ()=>{
    const { 
        showsList,
        fetchMoreShows,
        hasMore,
        filterByGenre,
        filterByYear,
        filterByCounrtry,
    } = useContext(DefaultDataContext);

    const { isMobileScreen, isTabletScreen } = useMedia();
    const [ storedData, setStoredData ] = useState([]);

    const renderNewElements = ()=>{
        let elements = storedData.filter(el => el.image && el.name);

        if(filterByGenre) {
            elements = elements.filter(el => el.genres.includes(filterByGenre));
        }

        if(filterByYear) {
            elements = elements.filter(el => format(new Date(el.premiered), 'yyyy') === filterByYear);
        }

        if(filterByCounrtry) {
            elements = elements.filter(el => el?.network?.country?.name === filterByCounrtry);
        }

        if(elements.length === 0) {
            return <p>0 series found</p>;
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
        
        if(storedData.length < showsList.length) {
            const slicedData = showsList.slice(storedData.length, storedData.length + SLICE_AMOUNT);
            setStoredData(prev => [...prev, ...slicedData]);

        } else if(storedData.length > 0) {
            fetchMoreShows();
        }
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
                {
                    filterByGenre || filterByYear || filterByCounrtry ?
                    <div className="ShowsList__wrapper">
                        { renderNewElements() }
                    </div>
                    :
                    <InfiniteScroll
                        dataLength={storedData.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<BeatLoader className="ShowsList__InfiniteScrollLoader" color="#e21221" />} >
                        <div className="ShowsList__wrapper">
                            { renderNewElements() }
                        </div>
                    </InfiniteScroll>
                }
            </div>
        </section>
    );
};

export default ShowsList;