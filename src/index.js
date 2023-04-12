import React from 'react';
import ReactDOM from 'react-dom/client';
import {SearchContextProvider} from './context/SearchContext';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { WatchedContextProvider } from './context/WatchedContext';
import { DefaultDataContextProvider } from './context/DefaultDataContext';
import App from './App';
import './normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <SearchContextProvider >
          <FavoriteContextProvider>
            <WatchedContextProvider>
              <DefaultDataContextProvider>
                <App />
              </DefaultDataContextProvider>
            </WatchedContextProvider>
          </FavoriteContextProvider>
      </SearchContextProvider>
  </React.StrictMode>
);

