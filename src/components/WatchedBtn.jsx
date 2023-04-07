import { useContext, useEffect, useState } from "react";
import { WatchedData } from "../context/WatchedData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import WatchedBtnCSS from './WatchedBtn.module.css';

const WatchedBtn = ({data})=>{
    const [isWatched, setIsWatched] = useState(false);
    const {watchedList, addToWatched, removeFromWatched} = useContext(WatchedData);

    useEffect(()=>{
        if(watchedList.length > 0) {
            const findIdWatch = watchedList.find(el => el.id === data.id);
            if (findIdWatch) {
                setIsWatched(true);
            }
        }
    }, [watchedList, data.id]);

    function handelWatched() {
        if(!isWatched) {
            addToWatched(data)
            setIsWatched(oldValue => !oldValue);
        } else {
            removeFromWatched(data.id)
            setIsWatched(oldValue => !oldValue);
        }
    };
    return (
        <span onClick={handelWatched} className={WatchedBtnCSS.watchedBtn} title="add to Watched">
            {isWatched? <FontAwesomeIcon icon={faCircleCheck} style={{color: "var(--green)"}} />: <FontAwesomeIcon icon={faEye} />}
        </span>
    )
};

export default WatchedBtn;