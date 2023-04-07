import PersonInfo from './PersonInfo';
import PersonShows from './PersonShows';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SkeletonActorPage from './SkeletonActorPage';

const PersonPage = () => {
    const [dataInfo, dataShows] = useLoaderData();
    const navigation = useNavigation();

    if(navigation.state === "loading") {
        console.log('loading')
        return <SkeletonActorPage />;
    }

    return (
        <main className='container'>
                <PersonInfo data={dataInfo} />
                <PersonShows data={dataShows}/>
        </main>
    )
};

export default PersonPage;



