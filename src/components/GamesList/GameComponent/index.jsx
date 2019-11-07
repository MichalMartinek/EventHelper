import React from 'react';

import './index.css';

class GameComponent extends React.Component {
    render() {
        return (
          <div>
              <p className="align_left">{this.props.game.time}</p>
              <p className="align_left">{this.props.game.home_team} vs. {this.props.game.visitor_team}</p>
              <p className="align_left">{this.props.game.place}</p>
          </div>
        );
    }
}

export default GameComponent;
