import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShowCardSkeleton = ({cards}) =>{
    
    return (
        Array(cards).fill(0).map((el, index) => {
            return (
                <Skeleton key={index} height={'100%'} style={{display: "flex", borderRadius: "8px"}} highlightColor='#d5d4d4' />
            ) 
        })
    );
};

export default ShowCardSkeleton;