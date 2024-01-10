import { useContext } from "react";
import { DefaultDataContext } from "context/DefaultDataContext";
import ActorCard from "components/ActorCard";
import ActorCardSkeleton from "components/ActorCardSkeleton";
import PopularActorsCSS from './css/PopularActors.module.css';

const PopularActors = ()=>{
    const { popularActors } = useContext(DefaultDataContext);

    function renderElements() {
        if(!popularActors) return;

        const elements = popularActors.map(el =><ActorCard key={el.person.id} data={el}/>)
        return elements;
    }

    return (
        <section style={{position: "relative"}}>
            <h2>Popular Actors</h2>
            <div className={PopularActorsCSS.wrapper}>
                {popularActors ? renderElements() : <ActorCardSkeleton cards={6}/>}
            </div>
        </section>
    );
};

export default PopularActors;