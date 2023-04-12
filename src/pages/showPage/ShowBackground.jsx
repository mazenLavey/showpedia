import { useState } from 'react';
import GetShowBackground from '../../data/GetShowBackground';
import { Blurhash  } from "react-blurhash";
import ShowBackgroundCSS from './css/ShowBackground.module.css';

const ShowBackground = ({data})=>{
    const [bgImgLoaded, setBgImgLoaded] = useState(false);
    const [bgImg] = GetShowBackground(data.id);

    function handelLoadingBgImg(e){
        setBgImgLoaded(e.target.complete);
    }

    return (
        <div className={ShowBackgroundCSS.background}>
            {bgImgLoaded? null: <Blurhash hash='LGC6rnIV00-p~qV@4otRENt6xCNb' width={"100%"} height={"100%"} className={ShowBackgroundCSS.bg__blurhash} style={{zIndex: 1}}/>}
            <img src={bgImg} alt={data.name} onLoad={handelLoadingBgImg}/>
        </div>
    );
};

export default ShowBackground;