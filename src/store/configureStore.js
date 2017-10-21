import {createStore, applyMiddleware, combineReducers} from 'redux';
import exampleData from './dataReducer';
import loggedIn from './loginReducer';
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
        combineReducers({exampleData, loggedIn}),
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}