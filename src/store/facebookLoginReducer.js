import * as types from './actionTypes';

export default function (state = false, action) {
    switch (action.type) {
        case types.FACEBOOK_LOGIN:
            return true;

        default:
            return state;
    }
}