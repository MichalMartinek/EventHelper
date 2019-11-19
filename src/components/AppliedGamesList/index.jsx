import React from "react";

import AppliedGame from "./AppliedGame";


class AppliedGamesList extends React.Component {

    forAllApplications(application, index) {
        return (
            <AppliedGame key={index} application={application}/>
        )
    }

    renderGames = () => {
        if (this.props.applications.length < 1) {
            return (
                <h2>Nemáte žádné přihlášené akce</h2>
            )
        }

        return (
            <div>
                {this.props.applications.map(this.forAllApplications)}
            </div>
        )
    };

    render = () => {
        return (
            <div>
                {this.renderGames()}
            </div>
        )
    };
}


export default AppliedGamesList;