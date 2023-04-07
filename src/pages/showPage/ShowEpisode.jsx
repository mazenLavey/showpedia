import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import SeasonBtn from './SeasonBtn';
import EpisodeCard from './EpisodeCard';
import ShowEpisodeCSS from './ShowEpisode.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel} from '@fortawesome/free-solid-svg-icons';

const ShowEpisode = ({data, dataIsLoaded = true})=>{
    const [seasonsNumber, setSeasonsNumber] = useState([]);
    const [selectedSeasons, setSelectedSeasons] = useState(1);

    useEffect(()=>{
        let seasonsArray = [];
        if (dataIsLoaded) {
            data.map(el => {
                seasonsArray.push(el.season);
                return el
            });
            return setSeasonsNumber(Array.from(new Set(seasonsArray)));
        }
    }, [data, dataIsLoaded]);
    

    function renderEpisodesBySeasonsNum(num) {
        if (dataIsLoaded) {
            const elements = data.filter(el => +el.season === num).map(el => <EpisodeCard key={nanoid()} data={el}/>)
            return elements;
        }
    }

    function handelClick(num) {
        setSelectedSeasons(num);
    }

    function renderSeasonBtns() {
        if (dataIsLoaded) {
            const elements = seasonsNumber.map(num => <SeasonBtn key={nanoid()} num={num} handelClick={handelClick} selectedSeasons={selectedSeasons}/>);
            return elements;
        }
    }

    return (
        <section className='section-margin'>
            <h2>Episodes</h2>
            {
                data.length > 0 && dataIsLoaded?
                <>
                <div className={ShowEpisodeCSS.btns}>
                    {renderSeasonBtns()}
                </div>
                <div className={ShowEpisodeCSS.episodes__wrapper}>
                    {renderEpisodesBySeasonsNum(selectedSeasons)}
                </div>
                </>
                :
                <p> No information available <FontAwesomeIcon icon={faFileExcel} style={{fontSize: "var(--font-600)", color: "var(--orange-light)"}} /></p>
            }

        </section>
    )
};

export default ShowEpisode;