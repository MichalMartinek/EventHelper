import React from 'react';
import GameWrapper from "./GameWrapper";

import './index.css';

class GameList extends React.Component {

    forAllGames = (item, index) => {
        return (
            <div key={index}>
                <GameWrapper date={item.date} games={item.games} />
            </div>
        );
    }

    render() {
        return (
            <div className="game-list-container">
                <ul className="game-list-list">
                    {this.props.games.map(this.forAllGames)}
                </ul>
            </div>
        );
    }
}

export default GameList;
