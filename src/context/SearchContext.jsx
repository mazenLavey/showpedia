import { getActorByQuery, getShowByQuery } from "api/index";
import React, { useState} from "react";

const SearchContext = React.createContext();

const SearchContextProvider = (props) =>{
    const [showsData, setShowsData] = useState([]);
    const [showsAreLoaded, setShowsAreLoaded] = useState(false);

    const [actorsData, setActorsData] = useState([]);
    const [actorsAreLoaded, setActorsAreLoaded] = useState(false);

    const [dataFromSearch, setDataFromSearch] = useState(false);

    function findShow(title) {
        setShowsAreLoaded(false);
        getShowDataFromApi(title);
    };

    function findActor(name) {
        setActorsAreLoaded(false);
        getActorDataFromApi(name);
    };

    function cancelResult() {
        setDataFromSearch(false);
    }

    const getActorDataFromApi = async (actorName) => {
        try {
            const { data } = await getActorByQuery(actorName);

            const cleanData = data.filter(el => el.person.image);
            setActorsData(cleanData);
            setActorsAreLoaded(true);
            setDataFromSearch(true);

        } catch(err) {
            console.error( '[getActorByQuery]', err)
        }
    };

    const getShowDataFromApi = async(showTitle) => {
        try {
            const { data } = await getShowByQuery(showTitle);
            const cleanData = data.filter(el => el.show.image);
            
            setShowsData(cleanData);
            setShowsAreLoaded(true);
            setDataFromSearch(true);
        } catch(err) {
            console.log('[getShowByQuery]', err)
        }
    };
    
    return (
        <SearchContext.Provider value={{showsData, showsAreLoaded, actorsData, actorsAreLoaded, dataFromSearch, findShow, findActor, cancelResult}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContextProvider, SearchContext};
