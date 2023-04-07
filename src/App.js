import Home from './pages/home/Home';
import ShowPage from './pages/showPage/ShowPage';
import PersonPage from './pages/personPage/PersonPage';
import { actorDataLoader } from './loaders/actorDataLoader';
import { Navigate, Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/routerLayouts/RootLayout';
import ShowLayout from './layouts/routerLayouts/ShowLayout';
import PersonLayout from './layouts/routerLayouts/PersonLayout';
import { showDataLoader } from './loaders/showDataLoader';
import Favorites from './pages/favorites/Favorites';
import Watched from './pages/watched/Watched';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='shows' element={<ShowLayout />}>
        <Route path=':showId/:showTitle' element={<ShowPage />} loader={showDataLoader}/>
      </Route>

      <Route path='actors' element={<PersonLayout />}>
        <Route path=':actordId/:actorName' element={<PersonPage />} loader={actorDataLoader}/>
      </Route>

      <Route path='favorites' element={<Favorites />}/>
      <Route path='watched' element={<Watched />}/>


      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  )
)
function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
