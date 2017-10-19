import * as types from './actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case types.SET_EXAMPLE_DATA:
            return action.payload;
        default:
            return state;
    }
}