import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ShowCardSkeleton from '../../components/ShowCardSkeleton';
import SkeletonActorPageCSS from './SkeletonActorPage.module.css';

const SkeletonActorPage = ()=>{
    return (
        <section className='container'>
            <div className={`${SkeletonActorPageCSS.info__wrapper} section-margin`}>
                <div className={SkeletonActorPageCSS.img__container}>
                    <Skeleton height={"100%"} width={"100%"} style={{position: "absolute", top: 0, left: 0}}/>
                </div>
                <div className={SkeletonActorPageCSS.info}>
                    <Skeleton count={0.4} style={{height: "25px"}}/>
                    <div className={SkeletonActorPageCSS.additional__info}>
                        <Skeleton count={0.3} />
                        <Skeleton count={0.35} />
                        <Skeleton count={0.4} />
                    </div>
                </div>
            </div>
            <h2>Shows</h2 >
            <div className={`${SkeletonActorPageCSS.shows__wrapper} section-margin`} >
                <ShowCardSkeleton cards={3}/>
            </div>
        </section>
    )
}

export default SkeletonActorPage;