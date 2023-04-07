import { createContext, useEffect, useState } from "react";

const StreamingData = createContext();

const StreamingDataProvider = (props)=>{
    const [streamingList, setStreamingList] = useState([]);

    useEffect(()=>{
        fetch(`https://api.tvmaze.com/schedule/web?date=2023-04-07&country=US`)
        .then(res => res.json())
        .then(data => {
            const filteredData = data.filter(el => el.airdate && el.season && el.number && el._embedded.show.image && el._embedded.show.name);
            console.log(filteredData);
        });
    }, []);


    return (
        <StreamingData.Provider value={{streamingList}}>
            {props.children}
        </StreamingData.Provider>
    );
};

export {StreamingDataProvider, StreamingData};