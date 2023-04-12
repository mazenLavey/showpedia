import React, {useState, useEffect} from "react";

const WatchedContext = React.createContext();

const WatchedContextProvider = (props) =>{
    const [ watchedList, setwatchedList] = useState([]);

    function addToWatched(itemData) {
        setwatchedList(oldValue => {
            const updataArray = [...oldValue, itemData];
            window.localStorage.setItem("watchedList", JSON.stringify(updataArray));
            return updataArray;
        });
    };

    function removeFromWatched(itemId) {
        const update = watchedList.filter(el => el.id !== itemId);
        setwatchedList(() => {
            window.localStorage.setItem("watchedList", JSON.stringify(update));
            return update
        });
    };

    useEffect(()=>{
        const loadFromList = JSON.parse(window.localStorage.getItem("watchedList"));
        if(loadFromList !== null) {
            if(loadFromList.length > 0) {
                setwatchedList(loadFromList);
            };
        }
    }, []);

    return (
        <WatchedContext.Provider value={{watchedList, addToWatched, removeFromWatched}}>
            {props.children}
        </WatchedContext.Provider>
    )
}

export {WatchedContextProvider, WatchedContext};
