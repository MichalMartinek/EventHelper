import {combineReducers} from 'redux';
import userReducer from './scenes/UserView/reducer';
import futureGamesReducer from './scenes/Home/components/FutureGames/reducer';
import gameReducer from './scenes/Game/reducer';
import pastGameReducer from './scenes/PastGame/reducer';

const games = combineReducers({
    futureGames: futureGamesReducer,
    game: gameReducer,
    pastGame: pastGameReducer,
});

const reducer = combineReducers({
    user: userReducer,
    games: games,
});

export default reducer;
