import GetStreamingData from "../../data/GetStreamingData";
import StreamingListCSS from './css/StreamingList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import StreamingSlider from "./StreamingSlider";
import { format } from "date-fns";

const StreamingList = ()=>{
    const {streamingList, isLoading, changeCountry} = GetStreamingData();

    function getDate() {
        return format(new Date(), 'MMM dd, yyy');;
    }

    function handelChange(e) {
        changeCountry(e.target.value)
    }

    return(
        <section >
            <header className={StreamingListCSS.header}>
                <h2 >Streaming</h2>
                <span className={StreamingListCSS.date}>{getDate()}</span>
                <form>
                    <select name="country" id="country" onChange={handelChange} className={StreamingListCSS.country}>
                        <option value="US">US</option>
                        <option value="CN">CN</option>
                        <option value="RU">RU</option>
                        <option value="GB">UK</option>
                    </select>
                </form>
            </header>
            <div className={StreamingListCSS.wrapper}>
                {
                streamingList.length === 0 ? 
                <p className={StreamingListCSS.noData}>there are no streaming shows for today, try another country  <FontAwesomeIcon icon={faMagnifyingGlassChart} style={{fontSize: "var(--font-600)"}}/></p> 
                : 
                <StreamingSlider streamingList={streamingList} isLoading={isLoading}/>
                }
            </div>
        </section>
    )
};

export default StreamingList;