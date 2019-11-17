import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from '../../actions';
import Header from "../../../../components/Header";

import style from '../../UserView.module.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../../UserView.module.css";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.user.user;
    }

    handleChangeFirstName(e) {

    }

    handleChangeLastName(e) {

    }

    handleChangeBirthday(e) {

    }

    handleChangePhone(e) {

    }

    handleChangeEmail(e) {

    }

    handleSave(e) {

    }

    handleDecline(e) {

    }

    changeGender(e) {

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
                    <img src={image}/>
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
                    <TextField
                        className={style.inputContainer}
                        label="Datum narození"
                        type="text"
                        name="birthday"
                        variant="outlined"
                        value={birthday}
                        onChange={(e) => this.handleChangeBirthday(e)}
                    />
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
                    <div className={style.gender}>
                        <h3>Pohlaví</h3>
                        <input
                            type="checkbox"
                            checked={gender === 'M'}
                            name="male"
                            value="M"
                            onChange={(e) => this.changeGender(e)}
                        />
                        <input
                            type="checkbox"
                            checked={gender === 'F'}
                            name="female"
                            value="F"
                            onChange={(e) => this.changeGender(e)}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
