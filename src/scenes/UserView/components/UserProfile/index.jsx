import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import * as actions from '../../actions';
import Header from "../../../../components/Header";

import style from '../../UserView.module.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import "../../UserView.module.css";
import DateFnsUtils from "@date-io/date-fns";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {...props.user.user, changed: false};
    }

    handleChangeFirstName(e) {
        this.setState({
            first_name: e.target.value,
            changed: true,
        });
    }

    handleChangeLastName(e) {
        this.setState({
            last_name: e.target.value,
            changed: true,
        });
    }

    handleChangeBirthday(e) {
        this.setState({
            birthday: e,
            changed: true,
        });
    }

    handleChangePhone(e) {
        this.setState({
            phone: e.target.value,
            changed: true,
        });
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value,
            changed: true,
        });
    }

    handleSave(e) {
        this.props.actions.updateUser(this.state);
        this.setState({
           changed: false,
        });
    }

    handleDecline(e) {
        this.props.push('/');
    }

    changeGender(e) {
        this.setState({
            gender: e.target.value,
            changed: true,
        });
    }

    render () {
        const {
            id,
            profile,
            first_name,
            last_name,
            birthday,
            gender,
            city,
            email,
            phone,
            image
        } = this.state;

        return (
            <div>
                <Header title="Profil"/>
                <div className={style.container}>
                    <h1>Můj profil</h1>
                    <img className={style.user_image} src={image}/>
                    <TextField
                        className={style.inputContainer}
                        label="Křestní jméno"
                        type="text"
                        name="first_name"
                        variant="outlined"
                        value={first_name}
                        onChange={(e) => this.handleChangeFirstName(e)}
                    />
                    <TextField
                        className={style.inputContainer}
                        label="Příjmení"
                        type="text"
                        name="last_name"
                        variant="outlined"
                        value={last_name}
                        onChange={(e) => this.handleChangeLastName(e)}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            variant="outlined"
                            id="date-picker-dialog"
                            label="Datum narození"
                            format="MM/dd/yyyy"
                            defaultValue="1996-03-29"
                            value={birthday}
                            onChange={(e) => this.handleChangeBirthday(e)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <TextField
                        className={style.inputContainer}
                        label="Email"
                        type="text"
                        name="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => this.handleChangeEmail(e)}
                    />
                    <TextField
                        className={style.inputContainer}
                        label="Telefoní číslo"
                        type="text"
                        name="number"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => this.handleChangePhone(e)}
                    />
                    <h3>Pohlaví</h3>
                    <div className={style.gender}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={gender === 'M'}
                                    onChange={(e) => this.changeGender(e)}
                                    value="M"
                                    color="primary"
                                />
                            }
                            label="Muž"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={gender === 'F'}
                                    onChange={(e) => this.changeGender(e)}
                                    value="F"
                                    color="primary"
                                />
                            }
                            label="Žena"
                        />
                    </div>
                </div>
                <div className={style.button_container}>
                    <Button
                        id={style.button_decline}
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.handleDecline(e)}
                    >
                        Zrušit
                    </Button>
                    <Button
                        id={style.button_save}
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.handleSave(e)}
                        disabled={!this.state.changed}
                        style={{ background: this.state.changed ? 'green' : 'darkgray' }}
                    >
                        Uložit
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
