import React, {useEffect, useState} from "react";

const FavoriteData = React.createContext();

const FavoriteDataProvider = (props) =>{
    const [ favoritesList, setFavoritesList] = useState([]);

    function addToFavorite(itemData) {
        setFavoritesList(oldValue => {
            const updataArray = [...oldValue, itemData];
            window.localStorage.setItem("favoritesList", JSON.stringify(updataArray));
            return updataArray;
        });
    };

    function removeFromFavorite(itemId) {
        const update = favoritesList.filter(el => el.id !== itemId);
        setFavoritesList(() => {
            window.localStorage.setItem("favoritesList", JSON.stringify(update));
            return update
        });
    };

    useEffect(()=>{
        const loadFromList = JSON.parse(window.localStorage.getItem("favoritesList"));
        if(loadFromList !== null) {
            if(loadFromList.length > 0) {
                setFavoritesList(loadFromList);
            };
        }
    }, []);

    return (
        <FavoriteData.Provider value={{favoritesList, addToFavorite, removeFromFavorite}}>
            {props.children}
        </FavoriteData.Provider>
    )
}

export {FavoriteDataProvider, FavoriteData};
