import React  from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PastUserGames from "./PastUserGames";
import Header from "../../../../components/Header";
import { previousUserGames } from "../../../../database/previousUserGames";
import * as actions from '../../../UserView/actions';
import * as gameActions from '../FutureGames/actions';

class PreviousGames extends React.Component {
    componentDidMount() {
        if (localStorage) {
            const user = localStorage.getItem('loggedUser');

            if (user) {
                this.props.actions.logIn(JSON.parse(user));
            }
        }
        this.props.gameActions.fetchPastGames(previousUserGames);
    }

    render () {
        return (
            <div style={{ marginTop: '6em' }}>
                <Header title="Proběhlé akce"/>
                <PastUserGames />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        gameActions: bindActionCreators(gameActions, dispatch),
    }
}

const mapStateToProps = state => ({
    user: state.user,
    pastGames: state.games.futureGames.pastGames,
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviousGames);
