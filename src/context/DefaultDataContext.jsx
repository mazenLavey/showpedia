import { createContext, useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";

const DefaultDataContext = createContext();

const DefaultDataContextProvider = (props)=>{
    const [popularActors, setPopularActors] = useState([]);
    const [topShows, setTopShows] = useState([]);

    async function getData() {
        const [actors, shows] = await Promise.all([
            fetch('http://localhost:3000/data/actorsData.json').then(res => res.json()),
            fetch('http://localhost:3000/data/topRatedShowsData.json').then(res => res.json()),
        ]);
        setPopularActors(actors);
        setTopShows(shows);
    };

    useEffect(()=>{
        getData();
    }, []);

    return (
        <DefaultDataContext.Provider value={{popularActors, topShows}}>
            {props.children}
        </DefaultDataContext.Provider>
    );
};

export {DefaultDataContextProvider, DefaultDataContext}