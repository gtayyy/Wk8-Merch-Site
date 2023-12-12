import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/inventory-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

store.subscribe(() => console.log('state Change', store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);