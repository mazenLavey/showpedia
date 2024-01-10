import ShowCard from 'components/ShowCard';
import PersonShowsCSS from './css/PersonShows.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel} from '@fortawesome/free-solid-svg-icons';

const PersonShows= ({data, dataIsLoaded=true})=>{

    function renderElement() {
        if (dataIsLoaded) {
            const element = data.map((el, index) => <ShowCard key={index} data={el._embedded.show}/>)
            return element;
        }
    }

    return (
        <section className='section-margin' >
            <h2>{data.length > 1? "Shows": "Show"}</h2 >
            {
                data.length > 0 && dataIsLoaded?
                <div className={PersonShowsCSS.wrapper} >{renderElement()}</div>
                :
                <p> No information available <FontAwesomeIcon icon={faFileExcel} style={{fontSize: "var(--font-600)", color: "var(--orange-light)"}} /></p>
            }

        </section>
    )
};

export default PersonShows;