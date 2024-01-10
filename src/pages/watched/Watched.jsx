import WatchedCSS from './Watched.module.css';
import { useContext } from "react";
import { WatchedContext } from "context/WatchedContext";
import ShowCard from 'components/ShowCard';

const Watched = ()=>{
    const {watchedList} = useContext(WatchedContext);
    const elements = watchedList.map(el => <ShowCard key={el.id} data={el}/>)
    return (
        <section className="container" style={{position: "relative"}}>
            <h2>Watched</h2>
            <div className={WatchedCSS.wrapper}>
                {elements}
            </div>
        </section>
    );
};

export default Watched;