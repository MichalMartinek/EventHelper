import * as types from "./actionTypes";
import {futureGames} from "../../database/futureGames";

export const initialState = {
    actualGame: null,
    applications: [],
    post: null
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
        case types.GET_POST:
            for(let i = 0; i < state.applications.length; i++){
                if(state.applications[i].gameId == action.gameId){
                    return Object.assign({}, state, {post: state.applications[i].post});
                }

            }
            return Object.assign({}, state, {post: null});

        case types.APPLY_FOR_POST:
            let newApplications = Array.from(state.applications);
            for(let i = 0; i < newApplications.length; ++i){
                if(newApplications[i].gameId == action.gameId){
                    newApplications[i].post = action.post;
                    return Object.assign({}, state, {applications: newApplications});
                }
            }

            newApplications.push({gameId: action.gameId, post: action.post});
            return Object.assign({}, state, {applications: newApplications});

        default:
            return state;
    }
}
