import { useState } from "react";

const useToggle = ()=>{
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(oldValue => !oldValue);
    };

    return {isActive, toggle};
};

export default useToggle;