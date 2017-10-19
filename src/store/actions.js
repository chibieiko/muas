import * as types from './actionTypes';

// Example action.
export const fetchData = exampleData => ({
    type: types.FETCH_EXAMPLE_DATA,
    payload: exampleData
});