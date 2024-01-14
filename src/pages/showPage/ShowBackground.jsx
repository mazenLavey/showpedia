import { useRef, useState } from 'react';
import GetShowBackground from '../../data/GetShowBackground';
import { Blurhash  } from "react-blurhash";
import ShowBackgroundCSS from './css/ShowBackground.module.css';

const ShowBackground = ({data})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [bgImg] = GetShowBackground(data.id);
    const imgRef = useRef(null);

    function handelLoadingBgImg(e){
        setIsLoading(!e.target.complete);
        imgRef.current.classList.add('fade-in');
    }

    return (
        <div className={ShowBackgroundCSS.background}>
            {isLoading && <Blurhash hash='LGC6rnIV00-p~qV@4otRENt6xCNb' width={"100%"} height={"100%"} className={ShowBackgroundCSS.bg__blurhash} style={{zIndex: 1}}/>}
            <img ref={imgRef} src={bgImg} alt={data.name} onLoad={handelLoadingBgImg}/>
        </div>
    );
};

export default ShowBackground;