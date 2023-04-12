import { nanoid } from 'nanoid';
import Actor from '../../components/ActorCard';
import ShowCastCSS from './css/ShowCast.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel} from '@fortawesome/free-solid-svg-icons';


const ShowCast= ({rowData, dataIsLoaded = true})=>{

    function cleanData(rowData) {
        const uniqueId = [];
        const cleanData = rowData.filter(el => el.person.image && el.person.name).filter(el => {
            const isUnique = uniqueId.includes(el.person.id);
            if(!isUnique) {
                uniqueId.push(el.person.id);
                return true;
            } else {
                return false;
            }
        });
        return cleanData;
    }

    function renderElement() {
        if (dataIsLoaded) {
            const data = cleanData(rowData);
            const element = data.map(el => {
                return (
                    <Actor key={nanoid()} data={el}/>
                )
            })
            return element;
        }
    }

    return (
        <section className='section-margin' >
            <h2>Show Cast</h2 >
            {
                rowData.length > 0 && dataIsLoaded?
                <div className={ShowCastCSS.wrapper} >{renderElement()}</div>
                :
                <p> No information available <FontAwesomeIcon icon={faFileExcel} style={{fontSize: "var(--font-600)", color: "var(--orange-light)"}} /></p>
            }

        </section>
    )
};

export default ShowCast;