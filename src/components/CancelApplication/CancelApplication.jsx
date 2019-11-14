import React from "react";
import {bindActionCreators} from "redux";
import * as actions from "../../scenes/Game/actions";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import ConfirmationPopup from "../ConfirmationPopUp/ConfirmationPopup";



class CancelApplicationModal extends React.Component{

    props = {
        successRedirect: '/',
        id: null,
        open: false
    };

    cancelApplication = (e) =>{
        e.preventDefault();
        this.props.actions.cancelApplication(this.props.id);
        this.props.push(this.props.successRedirect);
    };

    render(){
      return(
          <ConfirmationPopup open={this.props.open} onCancel={this.closeModal} onSuccess={this.cancelApplication}>
              Opravdu se chcete odhlásit?
          </ConfirmationPopup>
      )
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

export default connect(mapStateToProps, mapDispatchToProps)(CancelApplicationModal)