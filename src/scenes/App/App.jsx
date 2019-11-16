import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../UserView/actions';

import AuthorizationContext from '../../shared/context';
import NonLoggedHome from '../NonLoggedHome';
import Home from '../Home/index';

import '../../App.css';


class App extends React.Component {

    showScreen() {
        return this.props.user.loggedIn ? (<Home />) : ( <NonLoggedHome /> );
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
