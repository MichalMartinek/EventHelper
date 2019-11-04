import * as types from './actionTypes';

export const initialState = {
    user: null,
    loggedIn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            return Object.assign({}, state, { user: action.item, loggedIn: true });
        case types.LOG_OUT:
            return Object.assign({}, state, { user: null, loggedIn: false });
        default:
            return state;
    }
}
