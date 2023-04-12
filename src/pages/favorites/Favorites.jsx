import FavoritesCSS from './Favorites.module.css';
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { nanoid } from 'nanoid';
import ShowCard from '../../components/ShowCard';

const Favorites = ()=>{
    const {favoritesList} = useContext(FavoriteContext);
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