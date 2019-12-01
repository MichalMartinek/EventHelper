import React from "react";
import ActionComponent from "./ActionComponent";

class ActionsList extends React.Component {

    forAllGames = (game, index) => {
      return (
          <ActionComponent game={game} index={index}/>
      );
    };

    render () {
        return (
          <ul style={{ padding: 0}}>
              {this.props.games.map(this.forAllGames)}
          </ul>
        );
    }
}

export default ActionsList;
