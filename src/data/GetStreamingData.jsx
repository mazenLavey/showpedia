import { useEffect, useState } from "react";

const GetStreamingData = ()=>{
    const [streamingList, setStreamingList] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [country, setCountry] = useState("US")

    useEffect(()=>{
        const todayDate = getDate();
        const url = `https://api.tvmaze.com/schedule/web?date=${todayDate.year}-${todayDate.month}-${todayDate.day}&country=${country}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data) {
                const filteredData = data.filter(el => el.airdate && el.season && el.number && el._embedded.show.image && el._embedded.show.name);
                let idArray = [];
                const listOfUniqueShows = filteredData.filter(el => {
                    const showId = el._embedded.show.id;
                    if (!idArray.includes(showId)) {
                        idArray.push(showId);
                        return true;
                    } else {
                        return false
                    }
                    
                });
                listOfUniqueShows.forEach(el => {
                    const currentShowId = el._embedded.show.id;
                    let count = 0;
                    filteredData.map(elAgainst => {
                        if(currentShowId === elAgainst._embedded.show.id) {
                            count += 1;
                        };
                        return elAgainst;
                    });

                    if(count > 1) {
                        let firstEpisodeNum = el.number;
                        for (let i=1; i < count; i++) {
                            el.number =  `${el.number}, ${firstEpisodeNum + 1}`;
                            firstEpisodeNum++;
                        };
                    };
                });

                setStreamingList(listOfUniqueShows);
                setDataIsLoaded(true);
            } 
        });
    }, [country]);

    function getDate() {
        const date = new Date();
        const month = date.getMonth() +1;
        const day = date.getDate();
        const today = {
            year: date.getFullYear(),
            month: month.toString().length === 1? `0${month}`: month,
            day: day.toString().length === 1? `0${day}`: day
        }
        return today;
    }

    function changeCountry(newCountryCode) {
        setCountry(newCountryCode);
    };

    return {streamingList, dataIsLoaded, country, changeCountry};
};

export default GetStreamingData;