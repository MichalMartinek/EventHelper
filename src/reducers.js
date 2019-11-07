import { combineReducers } from 'redux';
import userReducer from './scenes/UserView/reducer';
import futureGamesReducer from './scenes/Home/components/FutureGames/reducer';

const games = combineReducers({
    futureGames: futureGamesReducer,
});

const reducer = combineReducers({
    user: userReducer,
   games: games,
});

export default reducer;
