import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch';

const GetShowBackground = (dataId)=>{
    const [bgImg, setBgImg] = useState("");
    const [bgImgData, imgIsLoaded] = useFetch(`https://api.tvmaze.com/shows/${dataId}/images`);

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
    }, [bgImgData, imgIsLoaded]);


    return[bgImg];
}

export default GetShowBackground;

