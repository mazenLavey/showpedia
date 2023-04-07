import React from 'react';
import ReactDOM from 'react-dom/client';
import {ShowDataProvider} from './context/ShowsData';
import { FavoriteDataProvider } from './context/FavoriteData';
import { WatchedDataProvider } from './context/WatchedData';
import { ActorsDataProvider } from './context/ActorsData';
import { StreamingDataProvider } from './context/StreamingData';
import './normalize.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ShowDataProvider >
        <ActorsDataProvider>
          <FavoriteDataProvider>
            <WatchedDataProvider>
              <StreamingDataProvider>
                <App />
              </StreamingDataProvider>
            </WatchedDataProvider>
          </FavoriteDataProvider>
        </ActorsDataProvider>
      </ShowDataProvider>
  </React.StrictMode>
);

