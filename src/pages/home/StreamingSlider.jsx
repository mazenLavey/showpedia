import ShowCard from "components/ShowCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import useMedia from "hooks/useMedia"
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';

const StreamingSlider = ({ streamingList }) => {
    const { isMobileScreen, isTabletScreen, isDesktopScreen } = useMedia();

    const elements = streamingList.map(el => 
        <SwiperSlide key={el.id}>
            <ShowCard data={el._embedded.show} badges={true} streamingDate={{ season: el.season, number: el.number }} />
        </SwiperSlide>
    );

    return (
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
    );
};

export default StreamingSlider;