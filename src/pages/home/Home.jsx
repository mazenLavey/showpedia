import {useEffect, useState, useContext} from 'react';
import HomeCSS from './css/Home.module.css';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import DefaultPage from './DefaultPage';
import ResultPage from './ResultPage';

const Home = ()=>{
    const [searchType, setSearchType] = useState("byShow");
    const { state } = useLocation();
    const {showsData, actorsData, dataFromSearch, cancelResult} = useContext(SearchContext)
    
    useEffect(()=>{
        if(state !== null) {
            setSearchType(state.search );
        };
    }, [state])

    function handelClick(e) {
        const type = e.target.dataset.searchtype;
        if(type === "byShow") {
            if(showsData.length === 0) {
                setSearchType(type);
                cancelResult();
            } else {
                setSearchType(type);
            }
        } else if(type === "byActor") {
            if(actorsData.length === 0) {
                setSearchType(type);
                cancelResult();
            } else {
                setSearchType(type);
            }
        };
    };

    return (
        <main className={`${HomeCSS.wrapper} container`}>
            <SearchBar searchType={searchType} handelClick={handelClick}/>
            {
                dataFromSearch?
                <ResultPage resultType={searchType}/>
                :
                <DefaultPage searchType={searchType}/>
            }
        </main>
    );
};

export default Home;