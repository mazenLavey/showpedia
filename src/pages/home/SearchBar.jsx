import React from "react";
import SearchBarCSS from './SearchBar.module.css';
import ByShowTitle from '../../components/ByShowTitle';
import ByActorName from '../../components/ByActorName';
import mainBg from '../../assets/main-bg.jpg';

const SearchBar = ({searchType, handelClick}) =>{

    return (
        <section>
            <div className={SearchBarCSS.bg_main}>
                <img src={mainBg} alt="background" />
            </div>
            <div className={SearchBarCSS.search__type}>
                    <span className={searchType === "byShow" ? SearchBarCSS.type__active: SearchBarCSS.type} onClick={handelClick} data-searchtype="byShow">By Show Title</span>
                    <span className={searchType === "byActor" ? SearchBarCSS.type__active: SearchBarCSS.type } onClick={handelClick} data-searchtype="byActor">By Actor Name</span>
            </div>
            {searchType === "byShow" ? <ByShowTitle /> : <ByActorName />}
        </section>
    )
};

export default SearchBar;