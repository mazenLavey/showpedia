import React, { useState } from "react";
import {Link} from 'react-router-dom';
import ShowCardCSS from './ShowCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar} from '@fortawesome/free-solid-svg-icons';
import matchText from '../functions/matchText';
import ShowCardSkeleton from './ShowCardSkeleton';
import { useInView } from 'react-intersection-observer';
import FavoriteBtn from "./FavoriteBtn";
import WatchedBtn from "./WatchedBtn";

const ShowCard = ({data})=>{
    const [hovered, setHovered] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const summary = data.summary? matchText(data.summary): null;

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    function handelHover(e) {
        if (e.type === "mouseleave") {
            setHovered(false);
        } else if(e.type === "mouseenter") {
            setHovered(true);
        }
    }

    function handelLoadingImg(e) {
        setIsComplete(e.target.complete);
    }


    return (
        <div className={ShowCardCSS.card} onMouseEnter={handelHover} onMouseLeave={handelHover} ref={ref}>
            <div  className={ShowCardCSS.frontFace}>
                {
                    isComplete ? null:
                    <div className={ShowCardCSS.skeleton}>
                        <ShowCardSkeleton />
                    </div>
                }
                {inView && <img src={data.image.medium} alt={data.name} onLoad={handelLoadingImg}/>}
            </div>
            {
                hovered && isComplete && inView &&
                <div className={ShowCardCSS.backFace}>
                    <h2 className={ShowCardCSS.title}>{data.name}</h2>
                    <div className={ShowCardCSS.genre}>
                        {data.genres.join(' | ')}
                    </div>
                    <div className={ShowCardCSS.info}>
                        <span><FontAwesomeIcon icon={faFilm} /> {data.averageRuntime? data.averageRuntime: "unKnown"}</span>
                        <span>{data.premiered? data.premiered.slice(0, 4): "unKnown"}</span>
                        <span><FontAwesomeIcon icon={faStar} style={{color: "var(--yellow)"}} /> {data.rating.average? data.rating.average: "0.0"}</span>
                    </div>
                    <div className={ShowCardCSS.summary}>
                        <p>{summary}</p>
                    </div>

                    <Link to={`/shows/${data.id}/${data.name.replaceAll(" ", "-")}`} state={{showId: data.id}} className={ShowCardCSS.btn__more}>More Info</Link>
                    <div className={ShowCardCSS.icons}>
                        <FavoriteBtn data={data}/>
                        <WatchedBtn data={data}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ShowCard;