import * as types from "./actionTypes";

export const initialState = {
    actualGame: 'default',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GAME:
            // console.log('game reducer');
            // console.log(state);
            // console.log(action);
            // console.log(Object.assign({}, state, {actualGame: action.item[0].games[0]}));
            return Object.assign({}, state, {actualGame: action.item});
        default:
            return state;
    }
}
