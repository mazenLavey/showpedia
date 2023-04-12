import Home from './pages/home/Home';
import ShowPage from './pages/showPage/ShowPage';
import PersonPage from './pages/personPage/PersonPage';
import { actorDataLoader } from './loaders/actorDataLoader';
import { Navigate, Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/routerLayouts/RootLayout';
import { showDataLoader } from './loaders/showDataLoader';
import Favorites from './pages/favorites/Favorites';
import Watched from './pages/watched/Watched';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='shows/:showId/:showTitle' element={<ShowPage />} loader={showDataLoader}/>
      <Route path='actors/:actordId/:actorName' element={<PersonPage />} loader={actorDataLoader}/>
      <Route path='favorites' element={<Favorites />}/>
      <Route path='watched' element={<Watched />}/>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  )
)
function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
