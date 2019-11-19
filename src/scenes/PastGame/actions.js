import * as types from './actionTypes';

export const fetchGame = (item) => ({
    type: types.FETCH_GAME,
    item,
});
