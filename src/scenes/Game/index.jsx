import React from 'react';
import { push } from 'react-router-redux';
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './index.css'
import ApplyForPostForm from "./components/ApplyForPostForm/ApplyForPostForm";
import {Money, AccessTime, Person, MyLocation} from "@material-ui/icons";
import * as actions from './actions';
import AppliedInfo from "./components/AppliedInfo";
import CircularProgress from "@material-ui/core/CircularProgress";
import StepBack from "../../components/StepBack";


class Game extends React.Component {

    componentDidMount() {
        this.props.actions.fetchGame(this.props.match.params.id);
        this.props.actions.getPost(this.props.match.params.id);
    }

    applicationComponent = () => {
        if(this.props.post === null){
            return (
                <ApplyForPostForm game={this.props.actualGame}/>
            );
        }
        return (
            <AppliedInfo post={this.props.post} game={this.props.actualGame} status={this.props.status}/>
        )
    };

    showMap = () => {
        this.props.push('/map/'+this.props.actualGame.id)
    };

    render() {
        if(this.props.actualGame === null){
            return (
                <CircularProgress color="primary" />
            )
        }
        return (
            <div>
                <Header title="Zápas"/>
                <div className="game-container">
                    <StepBack/>
                    <h2>{this.props.actualGame.home_team} vs. {this.props.actualGame.visitor_team}</h2>
                    <img src={this.props.actualGame.image} className="game-detail-img"/>
                    <p>{this.props.actualGame.description}</p>
                    <ul className="game-detail-parameter-container">
                        <li onClick={this.showMap}><MyLocation/><span className="location">{this.props.actualGame.place}</span></li>
                        <li><AccessTime/>{this.props.actualGame.time}</li>
                        <li><Person/>{this.props.actualGame.organizer}</li>
                        <li><Money/>{this.props.actualGame.salary} Kč/h</li>
                    </ul>
                    {this.applicationComponent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    actualGame: state.games.game.actualGame,
    post: state.games.game.post,
    status: state.games.game.status,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
