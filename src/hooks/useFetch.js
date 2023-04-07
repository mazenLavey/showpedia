import { useState, useEffect } from "react";

const useFetch = (url)=>{

    const [data , setData] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setDataIsLoaded(true);
            })
            .catch(error => console.error("Error:", error))
    }, [url])


    return [data, dataIsLoaded];
}

export default useFetch;