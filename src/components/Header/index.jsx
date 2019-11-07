import React from 'react';
import PropTypes from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuClass from "../Menu";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import './index.css';

class Header extends React.Component {
    addEvent(e) {
        e.preventDefault();
        this.props.push('/addEvent');
    }

    render() {
        return (
            <div className="main-header">
                <MenuClass />
                <h1 className="header-title">{this.props.title}</h1>
                <Fab id="add-button" size="medium" color="primary" aria-label="add" onClick={(e) => this.addEvent(e)}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Header);
