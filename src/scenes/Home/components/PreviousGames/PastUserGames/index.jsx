import React from "react";
import { connect } from "react-redux";

import GameComponent from "./GameComponent";

class PastUserGames extends React.Component {
    forAllGames = (game, index) => {
        return (
            <GameComponent
                game={game.game}
                key={index}
                position={game.position}
                rating={game.rating}
            />
        );
    };
    render() {
        return (
            <ul>
                {this.props.games.map(this.forAllGames)}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    games: state.games.futureGames.pastGames,
});

export default connect(mapStateToProps, null)(PastUserGames);
