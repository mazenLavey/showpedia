import React, { useState } from "react";
import {Link} from 'react-router-dom';
import ShowCardCSS from './ShowCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar, faInfo, faRepeat} from '@fortawesome/free-solid-svg-icons';
import matchText from '../functions/matchText';
import ShowCardSkeleton from './ShowCardSkeleton';
import { useInView } from 'react-intersection-observer';
import FavoriteBtn from "./FavoriteBtn";
import WatchedBtn from "./WatchedBtn";
import useMedia from "../hooks/useMedia";


const ShowCard = ({data, badges = false, streamingDate})=>{
    const [hovered, setHovered] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const {isMobileScreen, isTabletScreen} = useMedia();

    const summary = data.summary? matchText(data.summary): null;

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    function handelHover(e) {
        if (e.type === "mouseleave" ) {
            setHovered(false);
        } else if(e.type === "mouseenter" ) {
            setHovered(true);
        };
    }

    function handelLoadingImg(e) {
        setTimeout(()=>{
            setIsComplete(e.target.complete);
        }, 500);
    };

    function flipCard(e) {
        console.log('click')
        e.stopPropagation();
        if (!hovered) {
            setHovered(true);
        };
    };

    function unflipCard(e) {
        e.stopPropagation();
        if (hovered) {
            setHovered(false);
        };
    };

    return (
        <div className={ShowCardCSS.card} onMouseEnter={handelHover} onMouseLeave={handelHover} ref={ref} >
            <div  className={ShowCardCSS.frontFace}>
                {
                    isComplete ? null:
                    <div className={ShowCardCSS.skeleton}>
                        <ShowCardSkeleton />
                    </div>
                }
                {inView && 
                <>
                    {badges && <span className={ShowCardCSS.badges}>Season: {streamingDate.season} <span style={{color: "var(--main-color)"}}>|</span> Episode: {streamingDate.number}</span>}
                    <img src={data.image.medium} alt={data.name} onLoad={handelLoadingImg}/>
                    {isComplete && (isMobileScreen || isTabletScreen) && <span className={ShowCardCSS.info__badges} onTouchStart={flipCard}>
                        <FontAwesomeIcon icon={faInfo} />
                    </span>}
                </>}
            </div>
            {
                hovered && isComplete && inView &&
                <div className={ShowCardCSS.backFace}>
                    <h2 className={ShowCardCSS.title}>{data.name}</h2>
                    <div className={ShowCardCSS.genre}>
                        {data.genres && data.genres.join(' | ')}
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
                    { (isMobileScreen || isTabletScreen) && <span className={ShowCardCSS.unflip__badges} onTouchStart={unflipCard}>
                        <FontAwesomeIcon icon={faRepeat}/>
                    </span>}
                </div>
            }
        </div>
    );
};

export default ShowCard;