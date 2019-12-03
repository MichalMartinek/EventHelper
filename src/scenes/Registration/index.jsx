import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import style from '../Login/Login.module.css';

import * as actions from '../UserView/actions';
import { users, teams } from '../../database/userData';
import Header from "../../components/Header";
import ConfirmationPopup from "../../components/ConfirmationPopUp/ConfirmationPopup";

const defaultUser = {
    id:-1,
    profile: null,
    first_name: '',
    last_name: '',
    age: null,
    gender: null,
    birthday: null,
    city: '',
    email: '',
    phone: '',
    password: '',
}

class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_again: '',
            emailError: '',
            passwordError: '',
            passwordAgainError: '',
            active: 'user',
            modalOpen: false,
        };
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

    handleChangePasswordAgain = (e) => {
        this.setState({
            password_again: e.target.value,
        })
    };

    handleRegistration = (e) => {
        const { email, password_again, password} = this.state;
        const isEmailValid = email.length > 3;
        const isPasswordValid = password.length > 3;
        const isPasswordAgainValid = password_again.length > 3;

        this.setState({
            emailError: isEmailValid ? '' : 'Váš email je nevalidní',
            passwordError: isPasswordValid > 3 ? '' : 'Vaše heslo je nevalidní',
            passwordAgainError: isPasswordAgainValid > 3 ? '' : 'Vaše heslo je nevalidní',
        });
        e.preventDefault();

        if (!isEmailValid || !isPasswordValid || !isPasswordAgainValid) {
            return;
        } else if (password !== password_again) {
            this.setState({
                passwordError: 'Vaše hesla nejsou stejná',
                passwordAgainError: 'Vaše hesla nejsou stejná',
            });
            return;
        }

        if (this.state.password === this.state.password_again) {
            this.setState({
                modalOpen: !this.state.modalOpen,
            });
        }

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

    cancelLogin = () => {
        this.props.push('/');
    };

    acceptLogin = () => {
        const profile = this.state.active === 'user' ? users : teams;

        defaultUser.id = profile.length + 1;
        defaultUser.email = this.state.email;
        defaultUser.password = this.state.password;
        defaultUser.profile = this.state.active;

        if (this.state.active === 'user') {
            localStorage.setItem('loggedUser', JSON.stringify(defaultUser));
            this.props.actions.logIn(defaultUser);
            this.props.push('/');
        } else {
            localStorage.setItem('loggedUser', JSON.stringify(defaultUser));
            this.props.actions.logIn(defaultUser);
            this.props.push('/');
        }
    };

    render() {
        const { emailError, passwordError, passwordAgainError } = this.state;
        return (
            <div>
                <Header title="Registrovat se" />
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
                        Registrovat se
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
                    {emailError && <div>{emailError}</div>}
                    <TextField
                        className={style.inputContainer}
                        label="Heslo"
                        type="password"
                        name="email"
                        variant="outlined"
                        value={this.state.password}
                        onChange={(e) => this.handleChangePassword(e)}
                    />
                    {passwordError && <div>{passwordError}</div>}
                    <TextField
                        className={style.inputContainer}
                        label="Heslo znovu"
                        type="password"
                        name="email"
                        variant="outlined"
                        value={this.state.password_again}
                        onChange={(e) => this.handleChangePasswordAgain(e)}
                    />
                    {passwordAgainError && <div>{passwordAgainError}</div>}
                    <Button
                        id={style.button_login}
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.handleRegistration(e)}
                    >
                        Registrovat se
                    </Button>
                </div>
                <ConfirmationPopup
                    open={this.state.modalOpen}
                    onCancel={this.cancelLogin}
                    onSuccess={this.acceptLogin}>
                    <h3>Chcete být automaticky přihlášení?</h3>
                </ConfirmationPopup>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
