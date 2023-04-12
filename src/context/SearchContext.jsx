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

    async function getActorDataFromApi(actorName) {
        const apiUrl = `https://api.tvmaze.com/search/people?q=${actorName}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const cleanData = data.filter(el => el.person.image);

        setActorsData(cleanData);
        setActorsAreLoaded(true);
        setDataFromSearch(true);
    };

    async function getShowDataFromApi(showTitle) {
        const apiUrl = `https://api.tvmaze.com/search/shows?q=${showTitle}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const cleanData = data.filter(el => el.show.image);

        setShowsData(cleanData);
        setShowsAreLoaded(true);
        setDataFromSearch(true);
    };
    
    return (
        <SearchContext.Provider value={{showsData, showsAreLoaded, actorsData, actorsAreLoaded, dataFromSearch, findShow, findActor, cancelResult}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContextProvider, SearchContext};
