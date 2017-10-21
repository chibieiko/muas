import * as types from './actionTypes';

export default function (state = false, action) {
    switch (action.type) {
        case types.LOGGEDIN:
            return action.payload;

        default:
            return state;
    }
}