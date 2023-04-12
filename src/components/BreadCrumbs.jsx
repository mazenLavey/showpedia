import React from 'react';
import BreadCrumbsCSS from './BreadCrumbs.module.css';
import { Link, useLocation, useParams } from 'react-router-dom';

const BreadCrumbs = ()=>{
    const location = useLocation();
    const params = useParams();
    const title = params.showTitle || params.actorName;
    const pathArray = location.pathname.split('/').filter(el => el !== '');
    const searchType = pathArray[0];

    return (
        <>  
        {
            Object.keys(params).length > 0?
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