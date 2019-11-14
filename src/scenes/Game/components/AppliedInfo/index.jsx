import React from "react";

import Button from "@material-ui/core/Button";
import {Close} from "@material-ui/icons";

import '../../index.css';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import {connect} from "react-redux";
import ConfirmationPopup from "../../../../components/ConfirmationPopUp/ConfirmationPopup";

class AppliedInfo extends React.Component{

    state = {
        openModal: false,
    };

    cancelApplication = (e) =>{
        e.preventDefault();
        console.log('onCancel');
          this.props.actions.cancelApplication(this.props.game.id);
    };

    openModal = () => {
        this.setState(Object.assign({}, this.state, {openModal: true}));

    };

    closeModal = () => {
        this.setState(Object.assign({}, this.state, {openModal: false}));

    };

    render() {
        return (
          <div>
              <h3>Přihláškabyla odeslána</h3>
              <ul>
                  <li>
                      Přihláška na pozici: {this.props.post}
                  </li>
                  <li>
                      Stav přihlášky: <span>Čeká na vyřízení</span>
                  </li>
              </ul>

              <div className="btn-wrapper">
                  <Button startIcon={<Close/>} variant="contained" color="primary"
                          onClick={this.openModal}>
                      Zrušit přihlášku
                  </Button>
              </div>

              <ConfirmationPopup open={this.state.openModal} onCancel={this.closeModal} onSuccess={this.cancelApplication}>
                  Opravdu se chcete odhlásit?
              </ConfirmationPopup>
          </div>
        );
    }
}



const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppliedInfo)