import React, {useEffect, useState} from "react";

const ActorsData = React.createContext();

const ActorsDataProvider = (props) =>{
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [actorData, setActorData] = useState([]);

    useEffect(()=>{
        fetchFromDatabase();
    }, []);

    function findActor(name) {
        setDataIsLoaded(false);
        getActorDataFromApi(name);
    }

    async function getActorDataFromApi(actorName) {
        const apiUrl = `https://api.tvmaze.com/search/people?q=${actorName}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const cleanData = data.filter(el => el.person.image);

        setActorData(cleanData);
        setDataIsLoaded(true);
    };

    
    async function fetchFromDatabase() {
        const databaseUrl = 'http://localhost:3000/data/actorsData.json';
        const response = await fetch(databaseUrl);
        const data = await response.json();
        const cleanData = data.filter(el => el.person.image);

        setActorData(cleanData);
        setDataIsLoaded(true);
    }


    return (
        <ActorsData.Provider value={{dataIsLoaded, actorData, findActor}}>
            {props.children}
        </ActorsData.Provider>
    )
}

export {ActorsDataProvider, ActorsData};
