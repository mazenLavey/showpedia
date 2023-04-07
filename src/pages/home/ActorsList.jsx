import React, { useContext } from "react";
import {ActorsData} from '../../context/ActorsData';
import ActorCard from '../../components/ActorCard';
import { nanoid } from "nanoid";
import ActorsListCSS from './ActorsList.module.css';
import ActorCardSkeleton from "../../components/ActorCardSkeleton";

const ActorsList = ()=>{
    const { actorData, dataIsLoaded} = useContext(ActorsData);
    function renderElements() {
        if(dataIsLoaded) {
            const elements = actorData.map(actor =>{
                return <ActorCard key={nanoid()} data={actor}/>
            })
        return elements;
        }
    }

    return (
        <>
        <section>
            <h2>Actors</h2>
            <div className={ActorsListCSS.wrapper}>
                {dataIsLoaded? renderElements() : <ActorCardSkeleton cards={8}/>}
            </div>
        </section>
        </>
    );
};

export default ActorsList;