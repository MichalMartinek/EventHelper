import React from "react";
import GameComponent from "../GameComponent";

import './index.css';

class GameWrapper extends React.Component {

    forAllGames = (item, index) => {
        return (
            <div key={index}>
                <GameComponent game={item}/>
            </div>
        );
    };

    render() {
        return (
          <div>
              <p className="games-date">{this.props.date}</p>
              {this.props.games.map(this.forAllGames)}
          </div>
        );
    }
}

export default GameWrapper;
