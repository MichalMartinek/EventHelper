import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Facebook} from '@material-ui/icons';

import style from './Login.module.css';

import * as actions from '../UserView/actions';
import { users, teams } from '../../database/userData';
import Header from "../../components/Header";

import "./Login.module.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            active: 'user',
        };
    }

    componentDidMount() {
        console.log(this.props);
        if(this.props.user.loggedIn){
            this.props.push('/');
        }
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    };

    handleLogin = (e) => {
        e.preventDefault();
        const profile = this.state.active === 'user' ? users : teams;

        profile.forEach((user) => {
            if (this.state.email === user.email && this.state.password === user.password) {
                localStorage.setItem('loggedUser', JSON.stringify(user));
                this.props.actions.logIn(user);
                this.props.push('/');
            }
        });
    };

    getProfileStyle(profile) {
        if (this.state.active === profile) {
            return style.active_profile;
        }
        return style.profile
    }

    changeProfile(profile) {
        this.setState({
            active: profile,
        });
    }

    render() {
        return (
            <div>
                <Header title="Přihlásit se" />
                <div className={style.profile_wrapper}>
                    <a onClick={() => this.changeProfile('user')} className={this.getProfileStyle('user')}>
                        Pro brigádníky
                    </a>
                    <a onClick={() => this.changeProfile('team')} className={this.getProfileStyle('team')}>
                        Pro týmy
                    </a>
                </div>
                <div className={style.container}>
                    <h3 className={style.login_title}>
                        Přihlásit se
                    </h3>
                    <TextField
                        className={style.inputContainer}
                        label="Email"
                        type="email"
                        name="email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={(e) => this.handleChangeEmail(e)}
                    />
                    <TextField
                        className={style.inputContainer}
                        label="Heslo"
                        type="password"
                        name="email"
                        variant="outlined"
                        value={this.state.password}
                        onChange={(e) => this.handleChangePassword(e)}
                    />
                    <Button
                        id={style.button_login}
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.handleLogin(e)}
                    >
                        Přihlásit se
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   user: state.user,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
