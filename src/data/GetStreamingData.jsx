import { useEffect, useState } from "react";
import { getStreamingByCountry } from "api/index";
import { format } from "date-fns";

const GetStreamingData = ()=>{
    const [streamingList, setStreamingList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [country, setCountry] = useState("US")

    useEffect(()=>{
        const getStreamingList = async() => {
            const todayDate = format(new Date(), 'yyyy-MM-dd');

            try {
                setIsLoading(true);
    
                const { data } = await getStreamingByCountry(todayDate, country);
                if (!data) return;

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
                setIsLoading(false);
            } catch(err) {
                console.err('[getStreamingByCountry]', err)
            }
        }

        getStreamingList();
    }, [country]);

    function changeCountry(newCountryCode) {
        setCountry(newCountryCode);
    };

    return {streamingList, isLoading, country, changeCountry};
};

export default GetStreamingData;