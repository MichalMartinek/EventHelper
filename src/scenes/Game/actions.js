import * as types from './actionTypes';

export const fetchGame = (id) => ({
    type: types.FETCH_GAME,
    id,
});

