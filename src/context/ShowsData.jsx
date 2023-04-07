import React, {useEffect, useState} from "react";

const ShowData = React.createContext();

const ShowDataProvider = (props) =>{
    const [storedData, setStoredData] = useState([]);
    const [showFilteredData, setShowFilteredData] = useState([]);
    const [filterShow, setFilterShow] = useState(false);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(()=>{
        fetchFromDatabase();
    }, []);

    function findShow(name) {
        setDataIsLoaded(false);
        getShowDataFromApi(name);
    }

    async function getShowDataFromApi(showTitle) {
        const apiUrl = `https://api.tvmaze.com/search/shows?q=${showTitle}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const cleanData = data.filter(el => el.show.image);

        setShowFilteredData(cleanData);
        setFilterShow(true);
        setDataIsLoaded(true);
    };
    
    async function fetchFromDatabase() {
        const databaseUrl = 'http://localhost:3000/data/showsData.json';
        const response = await fetch(databaseUrl);
        const data = await response.json();
        const cleanData = data.filter(el => el.show.image);

        setStoredData(cleanData);
        setDataIsLoaded(true);
    }


    return (
        <ShowData.Provider value={{storedData, dataIsLoaded, showFilteredData, filterShow, findShow}}>
            {props.children}
        </ShowData.Provider>
    )
}

export {ShowDataProvider, ShowData};
