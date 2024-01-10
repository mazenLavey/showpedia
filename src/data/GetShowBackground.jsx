import { useEffect, useState } from "react";
import { getShowBackgroundById } from "api/index";

const GetShowBackground = (dataId)=>{
    const [bgImg, setBgImg] = useState("");

    useEffect(()=>{
        const getBackground = async() => {
            try {
                const { data } = await getShowBackgroundById(dataId);

                const bgImg = data.filter(el => el.type === "background");
                if(!bgImg) return;

                const higthResImg = bgImg.filter(el => el.resolutions.original.height >= 720);
                
                if (higthResImg.length > 0) {
                    setBgImg(higthResImg[higthResImg.length - 1].resolutions.original.url);
                }

            } catch(err) {
                console.error('[getShowBackgroundById]', err);
            }
        };

        getBackground();
    }, [dataId])

    return[bgImg];
}

export default GetShowBackground;

