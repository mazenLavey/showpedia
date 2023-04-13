import { createContext, useEffect, useState } from "react";
import { ref, onValue} from "firebase/database";
import {db} from '../config/firebase';

const DefaultDataContext = createContext();

const DefaultDataContextProvider = (props)=>{
    const [popularActors, setPopularActors] = useState([]);
    const [topShows, setTopShows] = useState([]);

    function getData() {
        onValue(ref(db), data =>{
            const actors = data.val()[0].actors;
            const shows = data.val()[0].shows;
            setPopularActors(actors);
            setTopShows(shows);
        })
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