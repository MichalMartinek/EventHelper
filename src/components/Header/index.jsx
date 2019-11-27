import React from 'react';
import PropTypes from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuClass from "../Menu";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import './index.css';
import {Person} from "@material-ui/icons";

class Header extends React.Component {
    addEvent(e) {
        e.preventDefault();
        this.props.push('/addEvent');
    }

    showUserProfile = () => {
        this.props.push('/userProfile');
    };

    renderIcon = () => {
        if (this.props.user.loggedIn && this.props.user.profile === 'team') {
            return (
                <Fab id="add-button" size="medium" color="primary" aria-label="add" onClick={(e) => this.addEvent(e)}>
                    <AddIcon />
                </Fab>
            )
        }
        if(this.props.user.loggedIn){
            return (
                <Person className="loggedInIcon" onClick={this.showUserProfile}/>
            );
        }
        return (<div></div>);
    };

    render() {
        return (
            <div className="main-header">
                <MenuClass />
                <h1 className="header-title">{this.props.title}</h1>
                {this.renderIcon()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
