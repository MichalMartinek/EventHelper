import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as actions from './actions';
import GameList from "../../../../components/GamesList";

import { futureGames } from "../../../../database/futureGames";

class FutureGames extends React.Component {
    componentDidMount() {
        this.props.actions.fetchGames(futureGames);
    }

    render() {
        return (
            <div>
                <GameList games={this.props.futureGames} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    futureGames: state.games.futureGames.futureGames,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FutureGames)
