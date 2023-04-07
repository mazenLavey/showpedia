import { useContext } from 'react';
import NavBarCSS from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye} from '@fortawesome/free-regular-svg-icons';
import {WatchedData} from '../../context/WatchedData';
import { FavoriteData } from '../../context/FavoriteData';

const NavBar = ()=>{
    const {watchedList} = useContext(WatchedData);
    const {favoritesList} = useContext(FavoriteData);

    return (
        <>
        <nav className={NavBarCSS.wrapper}>
            <ul>
                <li>
                    {favoritesList.length > 0 && <span className={NavBarCSS.counter}>{favoritesList.length}</span>}
                    <FontAwesomeIcon style={{color: "var(--red)"}} icon={faHeart} /> <NavLink to="favorites">Favorites</NavLink>
                </li>
                <li>
                    {watchedList.length > 0 && <span className={NavBarCSS.counter}>{watchedList.length}</span>}
                    <FontAwesomeIcon icon={faEye} /> <NavLink to="watched">Watched</NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default NavBar;