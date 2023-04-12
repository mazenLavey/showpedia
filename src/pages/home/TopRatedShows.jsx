import React, { useContext, useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import TopRatedShowsCSS from './css/TopRatedShows.module.css';
import ShowCard from '../../components/ShowCard';
import ShowCardSkeleton from '../../components/ShowCardSkeleton';
import useMedia from '../../hooks/useMedia';
import { DefaultDataContext } from "../../context/DefaultDataContext";

const TopRatedShows = ()=>{
    const {topShows} = useContext(DefaultDataContext);
    const {isMobileScreen, isTabletScreen} = useMedia();
    const [storedData, setStoredData] = useState([]);

    const renderNewElements = ()=>{
        const elements = storedData.filter(el => el.image && el.name).map( el=>{
            return <ShowCard key={nanoid()} data={el}/>
        });
        return elements;
    };

    // console.log(storedData);

    useEffect(()=>{
        let start = 0;
        let end = 30;

        const handelScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight;
            const screenHeight = e.target.documentElement.scrollTop + window.innerHeight;

            if ((screenHeight + 400  ) >= scrollHeight && topShows.length > end ) {
                const updataData = topShows.slice(start, end);
                setStoredData(oldValue => [...oldValue, ...updataData]);
                start += 30;
                end += 30;
            }
        };

        if(topShows.length > 0) {
            const slicedData = topShows.slice(start, end);
            setStoredData(slicedData);
            start += 30;
            end += 30;
        };

        window.addEventListener("scroll", handelScroll);
        return ()=>{
            window.removeEventListener("scroll", handelScroll);
        }
    }, [topShows]);


    return (
        <section >
            <h2>Top Rated Shows</h2>
            <div  className={`${TopRatedShowsCSS.wrapper} section-margin`}>
                {topShows.length > 0? renderNewElements() : <ShowCardSkeleton cards={isMobileScreen? 2 : (isTabletScreen? 4 : 8)}/>}
            </div>
        </section>
    );
};

export default TopRatedShows;