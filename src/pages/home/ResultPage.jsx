import ShowsSearchResult from "./ShowsSearchResult";
import ActorsSearchResult from "./ActorsSearchResult";
import ResultPageCSS from './css/ResultPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const ResultPage = ({resultType})=>{
    const {cancelResult} = useContext(SearchContext)
    
    function handelClick() {
        cancelResult()
    };

    return(
        <section>
            <div className={ResultPageCSS.header}>
                <h2>Result</h2>
                <FontAwesomeIcon icon={faCircleXmark}  onClick={handelClick}/>
            </div>
        {
            resultType === "byShow"?
            <ShowsSearchResult />
            :
            <ActorsSearchResult />
        }
        </section>
    )
};

export default ResultPage;