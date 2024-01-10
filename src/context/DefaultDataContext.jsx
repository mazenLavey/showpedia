import { createContext, useEffect, useState } from "react";
import { ref, get} from "firebase/database";
import { db } from 'config/firebase';
import { getAllShows } from "api/index";
import { format } from "date-fns";

const DefaultDataContext = createContext();

const DefaultDataContextProvider = ({ children })=>{
    const [ popularActors, setPopularActors ] = useState([]);
    const [ showsList, setShowsList ] = useState([]);
    const [ currentShowsPage, setCurrentShowsPage ] = useState(0);
    const [ hasMore, setHasMore ] = useState(true);
    const [ genresList, setGenresList ] = useState([]);
    const [ yearList, setYearList ] = useState([]);
    const [ counrtyList, setCountryList ] = useState([]);
    const [ filterByGenre, setFilterByGenre ] = useState(null);
    const [ filterByYear, setFilterByYear ] = useState(null);
    const [ filterByCounrtry, setFilterByCounrtry ] = useState(null);
    
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

    useEffect(()=>{
        if(!showsList) return;

        let genresList = [];
        let yearsList = [];
        let countryList = [];

        showsList.forEach(el => {
            const genre = el?.genres;
            if(genre) {
                genresList.push(...genre);
            }

            const year = el?.premiered;
            if(year) {
                yearsList.push(format(new Date(year), 'yyyy'));
            }

            const country = el?.network?.country?.name;
            if(country) {
                countryList.push(country);
            }
        });
    

        setGenresList(Array.from(new Set(genresList)).map(el => {
            return{value: el, label: el}
        }));
        setYearList(Array.from(new Set(yearsList)).sort((a, b) => b - a).map(el => {
            return{value: el, label: el}
        }));
        setCountryList(Array.from(new Set(countryList)).map(el => {
            return{value: el, label: el}
        }));

    }, [showsList]);

    const fetchMoreShows = () => {
        if (!hasMore) return;

        setCurrentShowsPage(prev => prev + 1 )
    }

    return (
        <DefaultDataContext.Provider value={{
            popularActors, 
            showsList, 
            fetchMoreShows, 
            hasMore, 
            genresList, 
            yearList, 
            counrtyList,
            filterByGenre,
            filterByYear,
            filterByCounrtry,
            setFilterByGenre,
            setFilterByYear,
            setFilterByCounrtry,
        }}>
            { children }
        </DefaultDataContext.Provider>
    );
};

export {DefaultDataContextProvider, DefaultDataContext}