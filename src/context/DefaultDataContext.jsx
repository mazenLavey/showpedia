import { createContext, useEffect, useState } from "react";
import { ref, get} from "firebase/database";
import { db } from 'config/firebase';
import { getAllShows } from "api/index";

const DefaultDataContext = createContext();

const DefaultDataContextProvider = ({ children })=>{
    const [ popularActors, setPopularActors ] = useState([]);
    const [ showsList, setShowsList ] = useState([]);
    const [ currentShowsPage, setCurrentShowsPage ] = useState(0);
    const [ hasMore, setHasMore ] = useState(true);
    
    useEffect(()=>{
        const getPopularActors = async() => {
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

        getPopularActors();
    }, []);

    useEffect(()=>{
        const getShowsList = async() =>{
            try {
                const { data } = await getAllShows(currentShowsPage)
                setShowsList(prev => [...prev, ...data]);
                
            } catch {
                setHasMore(false)
            }
        }

        getShowsList();
    }, [currentShowsPage]);

    const fetchMoreShows = () => {
        if (!hasMore) return;

        setCurrentShowsPage(prev => prev + 1 )
    }

    return (
        <DefaultDataContext.Provider value={{popularActors, showsList, fetchMoreShows, hasMore}}>
            { children }
        </DefaultDataContext.Provider>
    );
};

export {DefaultDataContextProvider, DefaultDataContext}