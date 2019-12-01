import * as types from './actionTypes';
import {futureGames} from "../../../../database/futureGames";


const initialState = {
    futureGames: [],
    findGames: [],
    pastGames: [],
    filterQuery: '',
    filtering: false,
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
        case types.FETCH_PAST_GAMES:
            return  Object.assign({}, state, { pastGames: action.item });
        case types.SAVE_FILTER_QUERY:
            return Object.assign({}, state, {filterQuery: action.query});
        case types.SET_FILTERING:
            return Object.assign({}, state, { filtering: action.item });
        default:
            return state;
    }
}
