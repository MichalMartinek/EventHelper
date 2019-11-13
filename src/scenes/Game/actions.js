import * as types from './actionTypes';

export const fetchGame = (id) => ({
    type: types.FETCH_GAME,
    id,
});

export const getPost = (gameId) => ({
    type: types.GET_POST,
    gameId,
});

export const applyForPost = (gameId, post) => ({
    type: types.APPLY_FOR_POST,
    gameId,
    post
});
