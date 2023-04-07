import React from 'react';
import BreadCrumbsCSS from './BreadCrumbs.module.css';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = ()=>{
    const location = useLocation();
    const linksList = location.pathname.split('/').filter(el => el !== '');
    const searchType = linksList[0];
    const title = linksList.pop();

    return (
        <>  
        {
            linksList.length > 0?
            <div className='container'>
                <ul className={BreadCrumbsCSS.breadcrumbs}>
                    <li><Link to="/" state={{search: searchType === "shows" ? "byShow" : "byActor"}}>{searchType}</Link></li>
                    <li>{title.replaceAll("-", " ")}</li>
                </ul>
            </div>
            :
            null
        }
        </>
    );
};

export default BreadCrumbs;