import {useEffect, useState} from 'react';
import HomeCSS from './Home.module.css';
import SearchBar from './SearchBar';
import ShowsList from './ShowsList';
import ActorsList from './ActorsList';
import { useLocation } from 'react-router-dom';

const Home = ()=>{
    const [searchType, setSearchType] = useState("byShow");
    const { state } = useLocation();
    
    useEffect(()=>{
        if(state !== null) {
            setSearchType(state.search );
        };
    }, [state])

    function handelClick(e) {
        setSearchType(e.target.dataset.searchtype);
    };

    return (
        <main className={`${HomeCSS.wrapper} container`}>
            <SearchBar searchType={searchType} handelClick={handelClick}/>
            {searchType === "byShow" ? <ShowsList /> :<ActorsList />}
        </main>
    );
};

export default Home;