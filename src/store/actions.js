import * as types from './actionTypes';

// Example action.
export const setData = exampleData => ({
    type: types.SET_EXAMPLE_DATA,
    payload: exampleData
});

export const loggedIn = loggedIn => ({
    type: types.LOGGEDIN,
    payload: loggedIn
});
