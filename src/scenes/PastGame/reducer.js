import * as types from './actionTypes';
import { previousUserGames } from "../../database/previousUserGames";

export const initialState = {
    game: null,
};

function getGameFromDb(id) {
    for (let i = 0; i < previousUserGames.length; i++) {
        if (previousUserGames[i].game.id === Number(id)) {
            return previousUserGames[i];
        }
    }
    return {};
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GAME:
            return Object.assign({}, state, { game: getGameFromDb(action.item) });
        default:
            return state
    }
}
