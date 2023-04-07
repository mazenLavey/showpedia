import matchText from '../../functions/matchText';
import ShowInfoCSS from './ShowInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import FavoriteBtn from '../../components/FavoriteBtn';
import WatchedBtn from '../../components/WatchedBtn';
import useFetch from '../../hooks/useFetch';
import { Blurhash  } from "react-blurhash";

const ShowInfo = ({data, dataIsLoaded = true})=>{
    const [imgLoaded, setImgLoaded] = useState(false);
    const [bgImg, setBgImg] = useState("");
    const [bgImgLoaded, setBgImgLoaded] = useState(false);
    const [bgImgData, imgIsLoaded] = useFetch(`https://api.tvmaze.com/shows/${data.id}/images`);

    useEffect(()=>{
        if(imgIsLoaded){
            const bgImg = bgImgData.filter(el => el.type === "background");
            if(bgImg.length > 0) {
                const higthResImg = bgImg.filter(el => el.resolutions.original.height > 1000);
                if (higthResImg.length > 0) {
                    setBgImg(higthResImg[0].resolutions.original.url);
                }
            };
        };
    }, [bgImgData, imgIsLoaded])

    function getSummary() {
        if (dataIsLoaded && data.summary) {
            const summary = matchText(data.summary);
            return summary;
        };
    };

    function getNetwork() {
        let netWorkInfo = {};

        if (dataIsLoaded && data.network) {
            netWorkInfo = {
                netWork : data.network.name,
                country: data.network.country.name
            };

        } else if (dataIsLoaded && data.webChannel) {
            let {name} = data.webChannel;
            let {country} = data.webChannel;

            if (country !==null && typeof country === "object") {
                country = country.name? country.name : false;
            } 

            netWorkInfo = {
                netWork : name? name : false,
                country: country? country : false
            };
        };
        return netWorkInfo;
    }

    function handelLoadingImg(e){
        setImgLoaded(e.target.complete);
    }

    function handelLoadingBgImg(e){
        setBgImgLoaded(e.target.complete);
    }

    return (
        <>
        {
            dataIsLoaded?
            <section className={`${ShowInfoCSS.wrapper} section-margin`}>
                <div className={ShowInfoCSS.background}>
                    {bgImgLoaded? null: <Blurhash hash='LGC6rnIV00-p~qV@4otRENt6xCNb' width={"100%"} height={"100%"} className={ShowInfoCSS.bg__blurhash} style={{zIndex: 1}}/>}
                    <img src={bgImg} alt={data.name} onLoad={handelLoadingBgImg}/>
                </div>
                <div className={ShowInfoCSS.img__container}>
                    {imgLoaded? null: <Skeleton />}
                    <img src={data.image.original} alt={data.name} onLoad={handelLoadingImg}/>
                </div>
                <div className={ShowInfoCSS.info}>
                    <div className={ShowInfoCSS.heading}>
                        <h2>{data.name && data.name}</h2>
                        <div className={ShowInfoCSS.btns}>
                            <FavoriteBtn data={data}/>
                            <WatchedBtn data={data}/>
                        </div>
                    </div>
                    <div className={ShowInfoCSS.rate}>
                        {data.averageRuntime && <span>   <FontAwesomeIcon icon={faFilm}  /> {data.averageRuntime}</span>}
                        {data.rating.average && <span>   <FontAwesomeIcon icon={faStar} style={{color: "var(--yellow)"}} /> {data.rating.average}</span>}
                    </div>
                    <p>{data.genres.join(' | ')}</p>
                    <p>{getSummary()}</p>
                    <div className={ShowInfoCSS.additional__info}>
                        {data.premiered && <p><span>Started:</span> {data.premiered.slice(0, 4)}</p>}
                        {data.status && <p><span>Status:</span> {data.status}</p>}
                        {data.language && <p><span>Language:</span> {data.language}</p>}

                        {getNetwork().netWork && <p><span>Network:</span> {getNetwork().netWork}</p>}
                        {getNetwork().country && <p><span>Country:</span> {getNetwork().country}</p>}
                    </div>
                </div>
            </section>
            :
            <h1>Loading</h1>
        }
        </>
    )
};

export default ShowInfo;