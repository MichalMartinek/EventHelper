import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from 'react-router-redux';

import style from "./AppliedGame.module.css";
import {AccessTime, Close, Money, MyLocation} from "@material-ui/icons";
import ApplicationStatus from "../../ApplicationStatus/ApplicationStatus";
import CancelApplicationModal from "../../CancelApplicationModal/CancelApplicationModal";
import Button from "@material-ui/core/Button";
import * as statuses from "../../../database/statuses"

class AppliedGame extends React.Component {


    state = {
        openModal: false
    };

    openModal = () => {
       this.setState(
            Object.assign({}, this.state, {openModal: true})
       );
    };

    hideModal = () => {
       this.setState(
            Object.assign({}, this.state, {openModal: false})
       );
    };

    showInstructions = (e) => {
        e.preventDefault();
        if(!this.isAccepted()){
            return;
        }

        this.props.push(`/game/${this.props.application.game.id}`);
    };

    isAccepted = () => {
        return this.props.application.status === statuses.ACCEPTED;
    };

    instructionsBtnColor = () => {
        return this.isAccepted()? 'primary' : 'disabled';
    };

    render() {
        return (
            <div className={style.applicationContainer} key={this.props.index}>
                <h2 className={style.title}>{this.props.application.game.home_team} vs {this.props.application.game.visitor_team}</h2>
                <div>
                    <img className={style.image} src={this.props.application.game.image}/>
                    <ul className={style.game_info}>
                        <li className={style.liVerticalCenter}><MyLocation/>{this.props.application.game.place}</li>
                        <li className={style.liVerticalCenter}><AccessTime/>{this.props.application.game.time}</li>
                        <li className={style.liVerticalCenter}><Money/>{this.props.application.game.salary} Kč/h</li>
                        <li className={style.liStatus}>
                            {this.props.application.post}
                            -
                            <ApplicationStatus applicationStatus={this.props.application.status}/>
                        </li>
                    </ul>
                </div>
                <div className={style.appliedBtnWrapper}>
                    <Button startIcon={<Close/>} variant="contained" color="secondary"
                            onClick={this.openModal}>
                        Odhlásit se
                    </Button>
                    <Button className={style.instructionsBtn} variant="contained" color={this.instructionsBtnColor()}
                            onClick={this.showInstructions}>
                        Pokyny
                    </Button>
                </div>
                <CancelApplicationModal onCancel={this.hideModal} successRedirect="/appliedEvents" open={this.state.openModal} id={this.props.application.game.id}/>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(AppliedGame);