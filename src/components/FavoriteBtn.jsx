import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartCliked } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartNotCliked} from '@fortawesome/free-regular-svg-icons';
import FavoriteBtnCSS from './FavoriteBtn.module.css';

const FavoriteBtn = ({data})=>{
    const [isFavorite, setIsFavorite] = useState(false);
    const {favoritesList, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);

    useEffect(()=>{
        if(favoritesList.length > 0) {
            const findId = favoritesList.find(el => el.id === data.id);
            if (findId) {
                setIsFavorite(true);
            }
        }

    }, [favoritesList, data.id]);

    function handelFavorite() {
        if(!isFavorite) {
            addToFavorite(data);
            setIsFavorite(oldValue => !oldValue);
        } else {            
            removeFromFavorite(data.id);
            setIsFavorite(oldValue => !oldValue);
        }
        
    };
    return (
        <span onClick={handelFavorite} className={FavoriteBtnCSS.favoriteBtn} title="add to Favorite">
            {isFavorite? <FontAwesomeIcon style={{color: "var(--red)"}} icon={faHeartCliked} />: <FontAwesomeIcon icon={faHeartNotCliked} />}
        </span>
    )
};

export default FavoriteBtn;