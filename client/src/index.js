import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, {}, applyMiddleware(thunk));

const app = (<Provider store={store}>
              <App />
            </Provider>);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

console.log(process.env.REACT_APP_STRIPE_KEY);
console.log(process.env.NODE_ENV);
