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

export const facebookLogin = () => ({
    type: types.FACEBOOK_LOGIN
});

export const setBudget = budget => ({
    type: types.SET_BUDGET,
    payload: budget
});
