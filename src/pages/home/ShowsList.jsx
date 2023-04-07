import React, { useContext } from "react";
import { nanoid } from 'nanoid';
import ShowsListCSS from './ShowsList.module.css';
import {ShowData} from '../../context/ShowsData';
import ShowCard from '../../components/ShowCard';
import ShowCardSkeleton from '../../components/ShowCardSkeleton';
import useMedia from '../../hooks/useMedia';

const ShowsList = ()=>{
    const {storedData, dataIsLoaded, showFilteredData, filterShow} = useContext(ShowData);
    const {isMobileScreen, isTabletScreen} = useMedia();

    function renderList() {
        let readyData= [];
        if(dataIsLoaded && !filterShow) {
            readyData = storedData;
        } else if(dataIsLoaded && filterShow) {
            readyData = showFilteredData;
        };

        const elements = readyData.map( el=>{
            return <ShowCard key={nanoid()} data={el.show}/>
        });
        return elements;
    };


    return (
        <section className={`${ShowsListCSS.wrapper} section-margin`}>
            {dataIsLoaded? renderList() : <ShowCardSkeleton cards={isMobileScreen? 2 : (isTabletScreen? 4 : 8)}/>}
        </section>
    );
};

export default ShowsList;