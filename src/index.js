import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import initStore from './store';
import * as serviceWorker from './serviceWorker';

import App from './scenes/App/App';
import NotFound from './scenes/NotFound';
import PreviousGames from "./scenes/PreviousGames";
import UserView from "./scenes/UserView";
import Game from "./scenes/Game";
import ApplicationConfirmation from "./scenes/ApplicationConfirmation";
import Login from "./scenes/Login";
import Registration from "./scenes/Registration";
import AppliedGames from "./scenes/AppliedGames";

const history = createBrowserHistory();
const store  = initStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/game/:id" component={Game} />
                <Route path="/pastEvents" component={PreviousGames} />
                <Route path="/userProfile" component={UserView} />
                <Route path="/appliedEvents" component={AppliedGames}/>
                <Route path="/applicationConfirmation" component={ApplicationConfirmation} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
