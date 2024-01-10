import { createContext, useEffect, useState } from "react";
import { ref, get} from "firebase/database";
import { db } from 'config/firebase';
import { getAllShows } from "api/index";

const DefaultDataContext = createContext();

const DefaultDataContextProvider = ({ children })=>{
    const [popularActors, setPopularActors] = useState([]);
    const [topShows, setTopShows] = useState([]);

    const getData = async() => {
        try {
            const snapshot = await get(ref(db));

            if (!snapshot.exists()) return;

            const data = snapshot.val()[0].actors;
            const cleanData = data.filter(el => el.person.image);

            setPopularActors(cleanData);

        } catch (error) {
            console.error('[Error fetching actors data]', error);
        }
    };

    useEffect(()=>{
        getData();
    }, []);

    useEffect(()=>{
        const getData = async() =>{
            try {
                const { data } = await getAllShows(1)
                setTopShows(data);

            } catch(err) {
                console.log(err)
            }
        }

        getData();
    }, []);

    return (
        <DefaultDataContext.Provider value={{popularActors, topShows}}>
            { children }
        </DefaultDataContext.Provider>
    );
};

export {DefaultDataContextProvider, DefaultDataContext}