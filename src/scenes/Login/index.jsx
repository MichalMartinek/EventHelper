import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.css'
import {Facebook} from '@material-ui/icons';

import * as actions from '../UserView/actions';
import { user1 } from '../../database/userData';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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

    handleLogin = (e) => {
        e.preventDefault();

        if (this.state.email === user1.email && this.state.password === user1.password) {
            localStorage.setItem('loggedUser', JSON.stringify(user1));
            this.props.actions.logIn(user1);
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <TextField
                    className={styles.inputContainer}
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={(e) => this.handleChangeEmail(e)}
                />
                <TextField
                    className={styles.inputContainer}
                    label="Heslo"
                    type="password"
                    name="email"
                    variant="outlined"
                    value={this.state.password}
                    onChange={(e) => this.handleChangePassword(e)}
                />

                <Button
                    className={styles.inputContainer}
                    variant="contained"
                    color="primary"
                    startIcon={<Facebook />}
                >
                    Login with Facebook
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => this.handleLogin(e)}
                >
                    Login
                </Button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
