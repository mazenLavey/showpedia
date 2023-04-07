import ShowInfo from './ShowInfo';
import ShowEpisode from './ShowEpisode';
import ShowCast from './ShowCast';
import { useLoaderData } from 'react-router-dom';

const ShowPage = ()=>{
    const [infoData, episodeData, castData] = useLoaderData();

    return (
        <main className='container'>
            <ShowInfo data={infoData}/>
            <ShowEpisode data={episodeData}/>
            <ShowCast rowData={castData}/>
        </main>
    )
};

export default ShowPage;

