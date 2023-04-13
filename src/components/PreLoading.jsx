import { useEffect, useState } from 'react';
import PreLoadingCSS from './PreLoading.module.css';

const PreLoading = ()=>{
    const [hide, setHide] = useState(false);
    
    useEffect(()=>{
        setTimeout(()=>{
            setHide(true);
        }, 1000);
    }, [])
    
    return (
        <>
        {hide?  null :
        <div className={PreLoadingCSS.loading}>
            <span className={PreLoadingCSS.shapes}></span>
        </div>}
        </>
    );
};

export default PreLoading;