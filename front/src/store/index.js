// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
// import rootReducer from './reducers';
import rootReducer from './reducers';
import log from './middleware/log';

// == Enhancers
// const composeEnhancers = process.env.REACT_APP_DEVTOOL;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const composeEnhancers = compose;
const enhancers = composeEnhancers(
    applyMiddleware(
        log,
    ),
);

// == Store
const store = createStore(
    rootReducer,
    enhancers,
);

// == Export
export default store;
