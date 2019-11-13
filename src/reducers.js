import {combineReducers} from 'redux';
import userReducer from './scenes/UserView/reducer';
import futureGamesReducer from './scenes/Home/components/FutureGames/reducer';
import gameReducer from './scenes/Game/reducer';

const games = combineReducers({
    futureGames: futureGamesReducer,
    game: gameReducer
});

const reducer = combineReducers({
    user: userReducer,
    games: games,
});

export default reducer;
