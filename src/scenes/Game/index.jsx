import React from 'react';
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './index.css'
import ApplyForPostForm from "./ApplyForPostForm";
import {Money, AccessTime, Person, MyLocation} from "@material-ui/icons";
import * as actions from './actions';


class Game extends React.Component {

    componentDidMount() {
        //this.props.actions.fetchGame(futureGames);
        console.log('po fetchgames');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header title="Zápas"/>
                <div className="game-container">
                    <h2>{this.props.actualGame.home_team} vs. {this.props.actualGame.visitor_team}</h2>
                    {/*<img src={this.props.actualGame.img} className="game-detail-img"/>
                    <p>{this.props.actualGame.description}</p>
                    <div className="game-detail-parameter-container">
                    <MyLocation/>{this.props.actualGame.place}<br/>
                    <AccessTime/>{this.props.actualGame.time}<br/>
                    <Money/>{this.props.actualGame.salary} Kč/h<br/>
                    <Person/>{this.props.actualGame.organizer} <br/>
                    </div>
                    <h3>Přihlásit se na akci</h3>
                    <ApplyForPostForm game={this.props.actualGame}/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    actualGame: state.games.game.actualGame,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
