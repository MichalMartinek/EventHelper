import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../scenes/UserView/actions';

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./styles.css";

class MenuClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

    handleClick = (e) => {
        this.setState({
            anchorEl: e.currentTarget,
        });
    }

    handleCloseMenu = () => {
        this.setState({
            anchorEl: null,
        });
    }

    logOutUser = () => {
        localStorage.clear();
        this.props.actions.logOut();
        this.props.push('/');
    };

    renderMenuTeam() {
        return (
            <div id="menu-align-left">
                <IconButton id="menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleCloseMenu}
                >
                    <MenuItem><Link className="no-style-link" to="/">Budoucí akce</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/pastEvents">Proběhlé akce</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/userProfile">Můj profil</Link></MenuItem>
                    <MenuItem onClick={this.logOutUser}><Link className="no-style-link" to='/'>Odhlásit se</Link></MenuItem>
                </Menu>
            </div>
        )
    }

    renderMenuUser() {
        return (
            <div id="menu-align-left">
                <IconButton id="menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleCloseMenu}
                >
                    <MenuItem><Link className="no-style-link" to="/">Hledat akce</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/signedActions">Přihlášené akce</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/pastActions">Proběhlé akce</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/userProfile">Můj profil</Link></MenuItem>
                    <MenuItem onClick={this.logOutUser}><Link className="no-style-link" to='/'>Odhlásit se</Link></MenuItem>
                </Menu>
            </div>
        );
    }

    renderMenuNonLogged() {
        return (
            <div id="menu-align-left">
                <IconButton id="menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleCloseMenu}
                >
                    <MenuItem><Link className="no-style-link" to="/">Domů</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/login">Přihlášení</Link></MenuItem>
                    <MenuItem><Link className="no-style-link" to="/registration">Registrace</Link></MenuItem>
                </Menu>
            </div>
        );
    }

    renderMenus = () => {
        if (this.props.user.loggedIn) {
            if (this.props.user.profile === 'team') {
                return this.renderMenuTeam();
            }
            return this.renderMenuUser();
        }
        return this.renderMenuNonLogged();
    }

    render() {
        return (
            <div>
                {this.renderMenus()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuClass);
