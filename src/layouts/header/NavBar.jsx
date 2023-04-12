import { useContext } from 'react';
import NavBarCSS from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye} from '@fortawesome/free-regular-svg-icons';
import { WatchedContext } from '../../context/WatchedContext';
import { FavoriteContext } from '../../context/FavoriteContext';

const NavBar = ()=>{
    const {watchedList} = useContext(WatchedContext);
    const {favoritesList} = useContext(FavoriteContext);

    return (
        <>
        <nav className={NavBarCSS.wrapper}>
            <ul>
                <li>
                    {favoritesList.length > 0 && <span className={NavBarCSS.counter}>{favoritesList.length}</span>}
                    <NavLink to="favorites"><FontAwesomeIcon style={{color: "var(--red)"}} icon={faHeart} /> Favorites</NavLink>
                </li>
                <li>
                    {watchedList.length > 0 && <span className={NavBarCSS.counter}>{watchedList.length}</span>}
                    <NavLink to="watched"><FontAwesomeIcon icon={faEye} /> Watched</NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default NavBar;