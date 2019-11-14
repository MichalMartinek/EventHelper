import React from "react";

import ThumbUp from "@material-ui/icons";

import * as statuses from "../../database/statuses";

class ApplicationStatus extends React.Component{

    statusText(status){
        switch (status) {
            case statuses.ACCEPTED:
                return 'Přijmuto';
            case statuses.REJECTED:
                return 'Zamítnuto';
            default:
                return 'Nepotvrzeno';
        }
    }

    icon(){
        switch (status) {
            case statuses.ACCEPTED:
                return 'Přijmuto';
            case statuses.REJECTED:
                return 'Zamítnuto';
            default:
                return 'Nepotvrzeno';
        }
    }

    render() {
        return(
            <span>{this.statusText(this.props.status)}</span>
        )
    }
}