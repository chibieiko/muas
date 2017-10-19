import * as types from './actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case types.FETCH_EXAMPLE_DATA:
            return {
                ...state,
                exampleData: action.payload
            }
    }
}