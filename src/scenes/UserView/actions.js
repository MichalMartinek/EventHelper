import * as types from './actionTypes';

export function logIn(item) {
    return {
        type: types.LOG_IN,
        item,
    }
}

export function updateUser(item) {
    return {
        type: types.UPDATE_USER,
        item,
    }
}

export function logOut() {
    return {
        type: types.LOG_OUT,
    }
}
