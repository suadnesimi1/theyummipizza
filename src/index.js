import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

// import stylesheets
import './assets/css/custom.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
