import FavoritesCSS from './Favorites.module.css';
import { useContext} from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { nanoid } from 'nanoid';
import ShowCard from '../../components/ShowCard';
import PreLoading from '../../components/PreLoading';

const Favorites = ()=>{
    const {favoritesList} = useContext(FavoriteContext);
    const elements = favoritesList.map(el => <ShowCard key={nanoid()} data={el}/>)

    return (
        <section className="container" style={{position: "relative"}}>
            <h2>Favorites</h2>
            <PreLoading />
            <div className={FavoritesCSS.wrapper}>
                {elements}
            </div>
        </section>
    );
};

export default Favorites;