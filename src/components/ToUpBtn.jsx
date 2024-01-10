import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ToUpBtnCSS from './ToUpBtn.module.css';

const ToUpBtn = ()=>{
    const [active, setActive] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', scrollToUp);
        return ()=>{
            window.removeEventListener('scroll', scrollToUp);
        };

    }, [])

    function scrollToUp() {
        if(window.scrollY > 600) {
            setActive(true);
        } else {
            setActive(false);
        }
    }

    function handelClick() {
        window.scrollTo({
            left: 0,
            top: 0
        });
    }

    return ( ReactDOM.createPortal(
    <div className={`${ToUpBtnCSS.upBtn} ${active? ToUpBtnCSS.active: null}`} onClick={handelClick}>
        Up
    </div>
    , document.getElementById('portal')));
};

export default ToUpBtn;