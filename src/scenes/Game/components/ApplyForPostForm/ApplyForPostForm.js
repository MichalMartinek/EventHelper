import React from "react";

import { push } from 'react-router-redux';

import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Add} from "@material-ui/icons";

import '../../index.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

import ConfirmationPopup from "../../../../components/ConfirmationPopUp/ConfirmationPopup";

class ApplyForPostForm extends React.Component {

    state = {
        post: null,
        openModal: false
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
        this.forAllPosts = this.forAllPosts.bind(this);

    }

    onPostChange(e) {
        this.setState(Object.assign({}, this.state, {post: e.target.value}));
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.post === null) {
            alert(
                'Musíte nejdříve zvolit pozici'
            );
            return;
        }

        this.openModal();
    }

    apply = () => {
        this.props.actions.applyForPost(this.props.game.id, this.state.post);
        this.props.push('/applicationConfirmation');
    };

    openModal = () => {
        this.setState(Object.assign({}, this.state, {openModal: true}));

    };

    closeModal = () => {
        this.setState(Object.assign({}, this.state, {openModal: false}));

    };

    forAllPosts(post, index) {
        return (
            <FormControlLabel key={index} value={post} control={<Radio/>} label={post}/>
        )
    }

    render() {
        return (
            <form>
                <h3 className="form-heading">Přihlásit se na akci</h3>
                <FormControl component="fieldset">
                    <RadioGroup name="post" onChange={this.onPostChange}>
                        {this.props.game.freePosts.map(this.forAllPosts)}
                    </RadioGroup>
                </FormControl>

                <div className="btn-wrapper">
                    <Button startIcon={<Add/>} variant="contained" color="primary"
                            onClick={this.onSubmit}>
                        Poslat přihlášku
                    </Button>
                </div>
                <ConfirmationPopup
                    open={this.state.openModal}
                    onCancel={this.closeModal}
                    onSuccess={this.apply}>
                    <h3>Opravdu se chcete přihlásit?</h3>
                </ConfirmationPopup>
            </form>
        );
    }
}

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyForPostForm)