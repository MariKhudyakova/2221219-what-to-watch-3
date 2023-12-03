import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { films } from './mocks/films.ts';
import { promoFilm } from './mocks/promoFilm.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} promoFilm={promoFilm} />
    </Provider>
  </React.StrictMode>
);
