import ShowCard from "components/ShowCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import useMedia from "hooks/useMedia";
import ShowCardSkeleton from "components/ShowCardSkeleton";
import StreamingSliderCSS from "./css/StreamingSlider.module.css";

const StreamingSlider = ({ streamingList, isLoading }) => {
    const { isMobileScreen, isTabletScreen, isDesktopScreen } = useMedia();

    const elements = streamingList.map(el => 
        <SwiperSlide key={el.id}>
            <ShowCard data={el._embedded.show} badges={true} streamingDate={{ season: el.season, number: el.number }} />
        </SwiperSlide>
    );

    return (
        <>
            {isLoading ?
                <div className={StreamingSliderCSS.skeleton__wrapper}>
                    <ShowCardSkeleton cards={isMobileScreen ? 1 : isTabletScreen ? 2 : isDesktopScreen ? 3 : 4} />
                </div>
                :
                <Swiper
                    spaceBetween={20}
                    slidesPerView={isMobileScreen ? 1.5 : isTabletScreen ? 2.5 : isDesktopScreen ? 3.5 : 4.5}
                    style={{ overflow: "unset" }}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={isMobileScreen? false : true}
                    modules={[Pagination, Navigation]}
                >
                    {elements}
                </Swiper>
            }
        </>
    );
};

export default StreamingSlider;