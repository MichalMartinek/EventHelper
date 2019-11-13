import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as actions from '../../../scenes/Game/actions';

import './index.css';


class GameComponent extends React.Component {
    handleClick = () => {
        console.log("Clicking");
        this.props.actions.fetchGame(this.props.game);
        this.props.push(`/game/${this.props.game.id}`);
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <p className="align_left">{this.props.game.time}</p>
                <p className="align_left">{this.props.game.home_team} vs. {this.props.game.visitor_team}</p>
                <p className="align_left">{this.props.game.place}</p>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(GameComponent);
