import { useContext } from "react";
import { DefaultDataContext } from "../../context/DefaultDataContext";
import ActorCard from "../../components/ActorCard";
import ActorCardSkeleton from "../../components/ActorCardSkeleton";
import PopularActorsCSS from './css/PopularActors.module.css';
import { nanoid } from "nanoid";
import PreLoading from "../../components/PreLoading";

const PopularActors = ()=>{
    const {popularActors} = useContext(DefaultDataContext);

    function renderElements() {
        if(popularActors.length > 0) {
            const cleanData = popularActors.filter(el => el.person.image);
            const elements = cleanData.map(actor =>{
                return <ActorCard key={nanoid()} data={actor}/>
            })
        return elements;
        }
    }

    return (
        <section style={{position: "relative"}}>
            <h2>Popular Actors</h2>
            <PreLoading />
            <div className={PopularActorsCSS.wrapper}>
                {popularActors.length > 0? renderElements() : <ActorCardSkeleton cards={8}/>}
            </div>
        </section>
    );
};

export default PopularActors;