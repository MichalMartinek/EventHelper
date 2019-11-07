import * as types from './actionTypes';
import {futureGames} from "../../../../database/futureGames";

const initialState = {
    futureGames: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_FUTURE_GAMES:
            return Object.assign({}, state, { futureGames: action.item });
        case types.ADD_GAME:
            return Object.assign({}, state, { futureGames: state.futureGames.concat(action.item) });
        default:
            return state;
    }
}
