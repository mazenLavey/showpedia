import { useContext} from "react";
import { FavoriteContext } from "context/FavoriteContext";
import ShowCard from 'components/ShowCard';
import FavoritesCSS from './Favorites.module.css';

const Favorites = ()=>{
    const { favoritesList } = useContext(FavoriteContext);
    const elements = favoritesList.map(el => <ShowCard key={el.id} data={el}/>)

    return (
        <section className="container" style={{position: "relative"}}>
            <h2>Favorites</h2>
            <div className={FavoritesCSS.wrapper}>
                {elements}
            </div>
        </section>
    );
};

export default Favorites;