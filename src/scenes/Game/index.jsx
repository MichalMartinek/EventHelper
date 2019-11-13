import React from 'react';
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './index.css'
import ApplyForPostForm from "./components/ApplyForPostForm/ApplyForPostForm";
import {Money, AccessTime, Person, MyLocation} from "@material-ui/icons";
import * as actions from './actions';
import AppliedInfo from "./components/AppliedInfo";


class Game extends React.Component {

    componentDidMount() {
        //this.props.actions.fetchGame(futureGames);
        console.log('po fetchgames');
    }

    applicationComponent = () => {
        if(this.props.applied){
            return (
                <AppliedInfo post={this.props.post}/>
            )
        }
        return (
            <ApplyForPostForm game={this.props.actualGame}/>
            );
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Header title="Zápas"/>
                <div className="game-container">
                    <h2>{this.props.actualGame.home_team} vs. {this.props.actualGame.visitor_team}</h2>
                    {/*<img src={this.props.actualGame.img} className="game-detail-img"/>
                    <p>{this.props.actualGame.description}</p>
                    <ul className="game-detail-parameter-container">
                        <li><MyLocation/>{this.props.actualGame.place}</li>
                        <li><AccessTime/>{this.props.actualGame.time}</li>
                        <li><Person/>{this.props.actualGame.organizer}</li>
                        <li><Money/>{this.props.actualGame.salary} Kč/h</li>
                    </ul>
                    {this.applicationComponent()}*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    actualGame: state.games.game.actualGame,
    post: 'Výčepní',
    applied: true
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
