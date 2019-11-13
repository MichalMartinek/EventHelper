import * as types from "./actionTypes";
import {futureGames} from "../../database/futureGames";

export const initialState = {
    actualGame: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GAME:
            let game = null;

            for(let i = 0; i < futureGames.length; ++i){
                for(let j = 0; j < futureGames[i].games.length; ++j){
                    if(futureGames[i].games[j].id == action.id){
                        game = futureGames[i].games[j];
                        game.date = futureGames[i].date;
                        return Object.assign({}, state, {actualGame: game});
                    }
                }
            }
            return state;
        default:
            return state;
    }
}
