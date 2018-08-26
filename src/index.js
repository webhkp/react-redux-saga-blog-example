import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import indexReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import './assets/styles/main.scss';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
    indexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(sagas)

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'),
)

registerServiceWorker();