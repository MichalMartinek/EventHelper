import React from "react";

import Button from "@material-ui/core/Button";
import {Close} from "@material-ui/icons";

import '../../index.css';
import CancelApplication from "../../../../components/CancelApplication/CancelApplication";

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
              <CancelApplication open={this.state.openModal} id={this.props.game.id}/>
          </div>
        );
    }
}

export default AppliedInfo