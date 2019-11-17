import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserProfile from './components/UserProfile';
import TeamProfile from './components/TeamProfile';

import * as actions from './actions';

class UserView extends React.Component {
    componentDidMount() {
        if (localStorage && !this.props.user.loggedIn) {
            const user = localStorage.getItem('loggedUser');

            if (user) {
                this.props.actions.logIn(JSON.parse(user));
            }
        }
    }

    renderView() {
        if (!this.props.user.loggedIn) {
            return null;
        }

        if (this.props.user.user.profile === 'user') {
            return (
              <UserProfile />
            );
        }
        return (
          <TeamProfile />
        );
    }

    render() {
        return (
            <div>
                {this.renderView()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
