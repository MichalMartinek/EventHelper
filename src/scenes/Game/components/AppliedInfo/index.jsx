import React from "react";

import Button from "@material-ui/core/Button";
import {Close} from "@material-ui/icons";

import '../../index.css';
import CancelApplication from "../../../../components/CancelApplicationModal/CancelApplicationModal";
import ApplicationStatus from "../../../../components/ApplicationStatus/ApplicationStatus";

class AppliedInfo extends React.Component{

    state = {
        openModal: false,
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
              <h3>Přihláška byla odeslána</h3>
              <ul>
                  <li>
                      Přihláška na pozici: {this.props.post}
                  </li>
                  <li>
                      Stav přihlášky: <ApplicationStatus applicationStatus={this.props.status}/>
                  </li>
              </ul>

              <div className="btn-wrapper">
                  <Button startIcon={<Close/>} variant="contained" color="primary"
                          onClick={this.openModal}>
                      Zrušit přihlášku
                  </Button>
              </div>
              <br/>
              <h3>Pokyny</h3>
              <p>
                  Dostavte se hodinu před začátkem události. V případě dotazů volejte na <a href="tel:+420111111111"> +420 111 222 333.</a>
              </p>
              <CancelApplication onCancel={this.closeModal} open={this.state.openModal} id={this.props.game.id}/>
          </div>
        );
    }
}

export default AppliedInfo