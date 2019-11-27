import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../UserView/actions';

import AuthorizationContext from '../../shared/context';
import NonLoggedHome from '../NonLoggedHome';
import Home from '../Home/index';

import '../../App.css';
import Login from "../Login";


class App extends React.Component {
    componentDidMount() {
        if (localStorage) {
            const user = localStorage.getItem('loggedUser');

            if (user) {
                this.props.actions.logIn(JSON.parse(user));
            }
        }
    }

    showScreen() {
        return this.props.user.loggedIn ? (<Home />) : ( <Login /> );
    }

    render() {
      return (
          <AuthorizationContext.Provider value={false}>
              <Fragment>
                  {this.showScreen()}
              </Fragment>
          </AuthorizationContext.Provider>
      );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
