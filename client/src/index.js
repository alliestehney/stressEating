import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import from these three libraries, which we installed with npm
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
// import { fetchRecipes } from './actions';
import thunkMiddleware from 'redux-thunk';
import geoMiddleware from 'redux-effects-geolocation';



// Create the redux Store. This is the central hub of Redux. It keeps track of
// the state (data) and calls the reducers.
const store = createStore(
    reducer,
    applyMiddleware( geoMiddleware(), thunkMiddleware, createLogger() ) // Enable Redux logging which is handy for developers.
);


// We need wrap our whole app in the Provider component. This lets Redux do its magic.
ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
