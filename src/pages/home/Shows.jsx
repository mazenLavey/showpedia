import StreamingList from './StreamingList';
import ShowsList from './ShowsList';

const Shows = ()=>{
    return (
        <section style={{position: "relative"}}>
            <StreamingList />
            <ShowsList />
        </section>
    );
};

export default Shows;