import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import FutureGames from "./components/FutureGames";
import FindGames from "./components/FindGames";

import * as actions from '../Home/components/FutureGames/actions';

import { futureGames } from "../../database/futureGames";
import { previousUserGames } from "../../database/previousUserGames";

class Home extends React.Component {
    componentWillMount() {
        if (this.props.user.user.profile === 'user') {
            this.props.actions.fetchFindGames(futureGames);
            this.props.actions.fetchPastGames(previousUserGames);
        }
    }

    renderList = () => {
        if (this.props.user.user.profile === 'user') {
            return (
                <FindGames />
            );
        }
        return (
            <FutureGames />
        )
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
