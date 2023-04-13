import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ActorCardSkeletonCSS from './ActorCardSkeleton.module.css';

const ActorCardSkeleton = ({cards}) =>{
    
    return (
        Array(cards).fill(0).map((el, index) => {
            return (
                <div key={index} className={ActorCardSkeletonCSS.card}>
                    <div>
                    <Skeleton  height={'100%'} style={{display: "flex", borderRadius: "8px"}} highlightColor='#d5d4d4'/>
                    </div>
                    <div>
                    <Skeleton count={0.4} highlightColor='#d5d4d4'/>
                    </div>
                </div>
            );
        })
    );
};

export default ActorCardSkeleton;