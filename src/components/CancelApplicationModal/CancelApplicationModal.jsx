import React from "react";
import {bindActionCreators} from "redux";
import * as actions from "../../scenes/Game/actions";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import ConfirmationPopup from "../ConfirmationPopUp/ConfirmationPopup";


class CancelApplicationModal extends React.Component {

    constructor(props) {
        super(props);
    }

    cancelApplication = (e) => {
        e.preventDefault();
        this.props.actions.cancelApplication(this.props.id);
        this.props.push(this.props.successRedirect);
    };

    render() {
        return (
            <ConfirmationPopup open={this.props.open} onCancel={this.props.onCancel} onSuccess={this.cancelApplication}>
                Opravdu se chcete odhlásit?
            </ConfirmationPopup>
        )
    }
}

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelApplicationModal)