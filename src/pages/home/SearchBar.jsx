import React from "react";
import SearchBarCSS from './css/SearchBar.module.css';
import ByShowTitle from '../../components/ByShowTitle';
import ByActorName from '../../components/ByActorName';
import mainBg from '../../assets/main-bg-small.jpg';

const SearchBar = ({searchType, handelClick}) =>{

    return (
        <section>
            <div className={SearchBarCSS.bg_main}>
                <img src={mainBg} alt="background" />
            </div>
            <div className={SearchBarCSS.wrapper}>
                <h1>Search</h1>
                <div className={SearchBarCSS.search__type}>
                        <span className={searchType === "byShow" ? SearchBarCSS.type__active: SearchBarCSS.type} onClick={handelClick} data-searchtype="byShow">By Show</span>
                        <span className={searchType === "byActor" ? SearchBarCSS.type__active: SearchBarCSS.type } onClick={handelClick} data-searchtype="byActor">By Actor</span>
                </div>
            </div>
            {searchType === "byShow" ? <ByShowTitle /> : <ByActorName />}
        </section>
    )
};

export default SearchBar;