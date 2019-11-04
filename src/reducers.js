import { combineReducers } from 'redux';
import userReducer from './scenes/UserView/reducer';

const reducer = combineReducers({
    user: userReducer,
});

export default reducer;
