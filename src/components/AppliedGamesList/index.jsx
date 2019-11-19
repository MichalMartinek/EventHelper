import React from "react";

import AppliedGame from "./AppliedGame";
import Button from "@material-ui/core/Button";
import {Search} from "@material-ui/icons";
import {bindActionCreators} from "redux";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import style from './AppliedGamesList.module.css'


class AppliedGamesList extends React.Component {

    forAllApplications(application, index) {
        return (
            <AppliedGame key={index} application={application}/>
        )
    }

    searchEvents = () => {
        this.props.push('/');
    };

    renderGames = () => {
        if (this.props.applications.length < 1) {
            return (
                <div className={style.wrapper}>
                    <h2>Nemáte žádné přihlášené akce</h2>
                    <Button startIcon={<Search/>} variant="contained" color="primary"
                            onClick={this.searchEvents}>
                        Vyhledat akce
                    </Button>
                </div>

            )
        }

        return (
            <div>
                {this.props.applications.map(this.forAllApplications)}
            </div>
        )
    };

    render = () => {
        return (
            <div>
                {this.renderGames()}
            </div>
        )
    };
}


function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(AppliedGamesList);