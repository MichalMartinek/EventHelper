import React from "react";

import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import './index.css';
import {Check, Close} from "@material-ui/icons";


class ConfirmationPopup extends React.Component {

    render() {
        return(
            <Modal open={this.props.open}>
                <div className="modal-body">
                    <div className="children-wrapper">
                        {this.props.children}
                    </div>
                <div>
                    <Button startIcon={<Close/>} variant="contained" color="secondary"
                            onClick={this.props.onCancel}>
                        Ne
                    </Button>
                    <Button className="successButton" startIcon={<Check/>} variant="contained" color="primary"
                            onClick={this.props.onSuccess}>
                        Ano
                    </Button>
                </div>
                </div>
            </Modal>
        )

    }
}


export default ConfirmationPopup;