import { useState, useEffect } from "react";

const useMedia= () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isTabletScreen, setIsTabletScreen] = useState(false);
    const [isDesktopScreen, setIsDesktopScreen] = useState(false);

    function getMediaSize() {
        if (window.matchMedia("(max-width: 575px)").matches) {
            setIsMobileScreen(true);
            setIsTabletScreen(false);
            setIsDesktopScreen(false);
            return
        } else if (window.matchMedia("(min-width: 576px)").matches && window.matchMedia("(max-width: 991px)").matches) {
            setIsMobileScreen(false);
            setIsTabletScreen(true);
            setIsDesktopScreen(false);
            return
        } else if (window.matchMedia("(min-width: 992px)").matches) {
            setIsMobileScreen(false);
            setIsTabletScreen(false);
            setIsDesktopScreen(true);
            return
        }
    }

    useEffect(()=>{
        getMediaSize();
        window.addEventListener('resize', getMediaSize);
        return ()=>{
            window.removeEventListener('resize', getMediaSize);
        }
    }, []);

    return {isMobileScreen, isTabletScreen, isDesktopScreen}
}

export default useMedia;