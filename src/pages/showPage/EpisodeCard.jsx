import EpisodeCardCSS from './EpisodeCard.module.css';
import matchText from '../../functions/matchText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay} from '@fortawesome/free-regular-svg-icons';
import useToggle from '../../hooks/useToggle';

const EpisodeCard = ({data})=>{
    const {isActive, toggle} = useToggle();
    const summary = matchText(data.summary);
    return (
        <div className={EpisodeCardCSS.body} onClick={toggle}>
            <div className={EpisodeCardCSS.info}>
                <FontAwesomeIcon icon={faCirclePlay} style={{fontSize: "var(--font-600)"}}/>
                <p className={EpisodeCardCSS.title}>{data.number}. {data.name}</p>
                <p className={EpisodeCardCSS.airdate}>{data.airdate.slice(0, 7)}</p>
            </div>
            {!isActive && <p className={EpisodeCardCSS.more}>Show More</p>}
            {isActive && <p className={EpisodeCardCSS.summary}>{summary}</p>}
        </div>
    )
};

export default EpisodeCard;