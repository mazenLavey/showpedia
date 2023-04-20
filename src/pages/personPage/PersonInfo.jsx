import {useState } from 'react';
import PersonInfoCSS from './css/PersonInfo.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const PersonInfo = ({data, dataIsLoaded = true})=>{
    const [imgLoaded, setImgLoaded] = useState(false);

    function handelLoading() {
        setImgLoaded(true);
    }

    function getCountry() {
        if (typeof data.country === "string" ) {
            return data.country
        } else if (typeof data.country === "object" && data.country !== null) {
            return data.country.name
        } else {
            return false
        }
    }


    return (
        <>
        {
            dataIsLoaded?

            <section className={`${PersonInfoCSS.wrapper} section-margin`}>
                <div className={PersonInfoCSS.img__container}>
                    {imgLoaded? null :<Skeleton highlightColor='#d5d4d4' height={"100%"} width={"100%"} style={{position: "absolute", top: 0, left: 0,}}/>}
                    <img src={data.image.original} alt={data.name} onLoad={handelLoading} />
                </div>
                <div className={PersonInfoCSS.info}>
                    <h2>{data.name && data.name}</h2>
                    <div className={PersonInfoCSS.additional__info}>
                        {getCountry() && <p><span>Country:</span> {getCountry()}</p>}
                        {data.birthday && <p><span>Born:</span> {data.birthday}</p>}
                        {data.deathday && <p><span>Died:</span> {data.deathday}</p>}
                    </div>
                </div>
            </section>
            :
            <h1>Loading</h1>
        }
        </>
    )
};

export default PersonInfo;