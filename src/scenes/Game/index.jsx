import React from 'react';
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './index.css'


import * as actions from './actions';

import { futureGames } from "../../database/futureGames";


class Game extends React.Component {

    componentWillMount() {
        this.props.actions.fetchGame(futureGames);
        console.log('po fetchgames');
    }

    forAllPosts(post, index) {
        return(
            <div key={index}>
                <input type="radio"/>
                <label>{post}</label>
            </div>
        )
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header title="Zápas"/>
                <div className="game-container">
                    <h2>{this.props.actualGame.home_team} vs. {this.props.actualGame.visitor_team}</h2>
                    <img src="/u183.png" className="game-detail-img"/>
                    <p>{this.props.actualGame.description}</p>
                    <div className="game-detail-parameter-container">
                    {this.props.actualGame.place}<br/>
                    {this.props.actualGame.time}<br/>
                    {this.props.actualGame.salary} Kč/h<br/>
                    {this.props.actualGame.organizer} <br/>
                    </div>
                    <h3>Přihlásit se na akci</h3>
                    <form>
                        {this.props.actualGame.freePosts.map(this.forAllPosts)}
                        <button type="submit">Přihlásit se na akci</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // TODO: fix
    // actualGame: state.actualGame,
    actualGame:  {
        id: 1,
        home_team: 'Basketball USK Praha',
        visitor_team: 'BC Sparta Praha',
        place: 'Pod juliskou 4',
        time: '10:30',
        description: 'Jedná se o mimořádný zápas mezi USK Praha a BC Spart. Potřebujeme uklízeče a 4 výčepní.',
        salary: 100,
        organizer: 'BC Sparta Praha',
        freePosts: [
            'Uklízeč',
            'Výčepní',
        ]
    },
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
