import * as types from './actionTypes';
import {futureGames} from "../../../../database/futureGames";

const initialState = {
    futureGames: [],
    findGames: [],
};

function justifyGames(games) {
    const finalArr = [];

    games.forEach((game) => {
        game.games.forEach((detail) => {
            detail.date = game.date;
            finalArr.push(detail);
        });
    });

    return finalArr;
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_FUTURE_GAMES:
            return Object.assign({}, state, { futureGames: action.item });
        case types.ADD_GAME:
            return Object.assign({}, state, { futureGames: state.futureGames.concat(action.item) });
        case types.FETCH_FIND_GAMES:
            return Object.assign({}, state, { findGames: justifyGames(action.item) });
        default:
            return state;
    }
}
