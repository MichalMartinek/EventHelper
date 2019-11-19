import React from "react";

import Map from "../../components/Map/Map";
import {bindActionCreators} from "redux";
import * as actions from "../Game/actions";
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "../../components/Header";
import style from './GameMap.module.css'
import StepBack from "../../components/StepBack";

class GameMap extends React.Component {

    componentDidMount() {
        this.props.actions.fetchGame(this.props.match.params.id);
    }

    render() {
        if (this.props.game === null) {
            return (
                <CircularProgress color="primary"/>
            )
        }
        return (
            <div>
                <Header title="Mapa"/>
                <div className={style.wrapper}>
                    <div className={style.stepBack}>
                        <StepBack/>
                    </div>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `86vh`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                        lat={this.props.game.lat}
                        lng={this.props.game.lng}
                    />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    game: state.games.game.actualGame,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMap)