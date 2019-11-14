import * as types from "./actionTypes";
import {futureGames} from "../../database/futureGames";
import * as statuses from "../../database/statuses"

export const initialState = {
    actualGame: null,
    applications: [],
    post: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GAME:
            let game = null;

            for (let i = 0; i < futureGames.length; ++i) {
                for (let j = 0; j < futureGames[i].games.length; ++j) {
                    if (futureGames[i].games[j].id == action.id) {
                        game = futureGames[i].games[j];
                        game.date = futureGames[i].date;
                        return Object.assign({}, state, {actualGame: game});
                    }
                }
            }
            return state;
        case types.GET_POST: {
            for (let i = 0; i < state.applications.length; i++) {
                if (state.applications[i].game.id == action.gameId) {
                    return Object.assign(
                        {},
                        state,
                        {
                            post: state.applications[i].post,
                            status: state.applications[i].status
                        }
                    );
                }

            }
            return Object.assign({}, state, {post: null});
        }
        case types.APPLY_FOR_POST: {
            let newApplications = Array.from(state.applications);
            let status = statuses.statuses[Math.floor(Math.random() * statuses.statuses.length)];

            for (let i = 0; i < newApplications.length; ++i) {
                if (newApplications[i].game.id == action.game.id) {
                    newApplications[i].post = action.post;
                    newApplications[i].status = status;
                    return Object.assign({}, state, {applications: newApplications});
                }
            }

            newApplications.push({game: action.game, post: action.post, status: status});
            return Object.assign({}, state, {applications: newApplications});
        }
        case types.CANCEL_APPLICATION: {
            let newApplications = Array.from(state.applications);
            for (let i = 0; i < newApplications.length; ++i) {
                if (newApplications[i].game.id == action.gameId) {
                    newApplications.splice(i, 1);
                    return Object.assign({}, state, {applications: newApplications, post: null});
                }
            }

            return state;
        }


        default:
            return state;
    }
}
