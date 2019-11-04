import * as types from './actionTypes';

export function logIn(item) {
    return {
        type: types.LOG_IN,
        item,
    }
}

export function logOut() {
    return {
        type: types.LOG_OUT,
    }
}
