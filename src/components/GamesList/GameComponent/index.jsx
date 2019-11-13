import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

class GameComponent extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/game/'+ this.props.game.id}>
                    <p className="align_left">{this.props.game.time}</p>
                    <p className="align_left">{this.props.game.home_team} vs. {this.props.game.visitor_team}</p>
                    <p className="align_left">{this.props.game.place}</p>
                </Link>
            </div>
        );
    }
}

export default GameComponent;
