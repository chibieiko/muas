import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'remote-redux-devtools';

let middleware = [];

if (__DEV__) {
    const logger = createLogger({collapsed: true});

    middleware = [...middleware, logger];
} else {
    middleware = [...middleware];
}

export default function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}