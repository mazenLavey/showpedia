import FavoritesCSS from './Favorites.module.css';
import { useContext } from "react";
import { FavoriteData } from "../../context/FavoriteData";
import { nanoid } from 'nanoid';
import ShowCard from '../../components/ShowCard';

const Favorites = ()=>{
    const {favoritesList} = useContext(FavoriteData);
    const elements = favoritesList.map(el => <ShowCard key={nanoid()} data={el}/>)

    return (
        <section className="container">
            <h2>Favorites</h2>
            <div className={FavoritesCSS.wrapper}>
                {elements}
            </div>
        </section>
    );
};

export default Favorites;