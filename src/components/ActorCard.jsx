import ActorCardCSS from './ActorCard.module.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

const ActorCard = ({data})=>{
    const [imgLoaded, setImgLoaded] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    function handelLoadImg(e) {
        setImgLoaded(e.target.complete);
    };

    return (
        <Link to={`/actors/${data.person.id}/${data.person.name.replaceAll(" ", "-")}`} state={{personName: data.person.name}}>
            <div className={ActorCardCSS.card} ref={ref}>
                {inView && 
                <>
                <div className={ActorCardCSS.img__container}>
                    {imgLoaded? null : <Skeleton />}
                    <img src={data.person.image.medium || data.person.image.original} alt={data.person.name && data.person.name} onLoad={handelLoadImg} />
                </div>
                <p className={ActorCardCSS.name}>{data.person.name && data.person.name} {data.person.country && `- ${data.person.country.code}`}</p>
                {data.character && <p><span>Role:</span>{data.character.name}</p>}
                </>
                }
            </div>
        </Link>
    );
};

export default ActorCard;