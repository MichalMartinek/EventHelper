import React from "react";

import {ThumbUp, ThumbDown } from "@material-ui/icons";

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

    icon(status){
        switch (status) {
            case statuses.ACCEPTED:
                return (
                    <ThumbUp/>
                );
            case statuses.REJECTED:
                return <ThumbDown/>;
            default:
                return '';
        }
    }

    render() {
        return(
            <span>{this.statusText(this.props.applicationStatus)}{this.icon(this.props.applicationStatus)}</span>
        )
    }
}

export default ApplicationStatus;