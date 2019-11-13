import React from "react";

import Button from "@material-ui/core/Button";
import {Add} from "@material-ui/icons";

import '../../index.css';

class AppliedInfo extends React.Component{




    render() {
        return (
          <div>
              <h3>Přihláška již byla odeslána</h3>
              <ul>
                  <li>
                      Přihláška na pozici: {this.props.post}
                  </li>
                  <li>
                      Stav přihlášky: <span>Čeká na vyřízení</span>
                  </li>
              </ul>

              <div className="btn-wrapper">
                  <Button startIcon={<Add/>} variant="contained" color="primary"
                          onClick={this.onSubmit}>
                      Zrušit přihlášku
                  </Button>
              </div>
          </div>
        );
    }
}


export default AppliedInfo;