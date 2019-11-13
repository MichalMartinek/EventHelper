import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from "../../components/Header";
import Button from '@material-ui/core/Button';

import './index.css';

class NonLoggedHome extends React.Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.push('/login');
    };

    hadnleRegistration = (e) => {
        e.preventDefault();
        this.props.push('/regisration');
    }

    render () {
        return (
            <div>
                <Header title="Event helper" />
                <div className="content_wrapper">
                    <h3 className="event_helper_title">
                        Event helper
                    </h3>
                    <p className="event_helper_paragraph">
                        Nejlepší služba pro spojování brigádníků, co hledají práci
                        pro sportovní kluby, a sportovní kluby, kteří tyhle lidi shánějí.
                    </p>
                    <div className="button_login_container">
                        <Button
                            id="event_helper_button"
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.hadnleRegistration(e)}
                        >
                            Registrovat se
                        </Button>
                        <Button
                            id="event_helper_button"
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.handleLogin(e)}
                        >
                            Přihlásit se
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
    }
}


export default connect(null, mapDispatchToProps)(NonLoggedHome);
