import React from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import Header from "../../components/Header";
import {push} from "react-router-redux";

import "./index.css"
import {bindActionCreators} from "redux";

class ApplicationConfirmation extends React.Component {

    goToApplicationList = () => {
        this.props.push('/appliedEvents');
    };

    render() {
        return (
            <div>
                <Header title="Potvrzení"/>
                <div className="container">
                    <h2>Přihlášení na
                        akci {this.props.actualGame.home_team} vs. {this.props.actualGame.visitor_team} bylo
                        odesláno</h2>
                    <Button variant="contained" color="primary" onClick={this.goToApplicationList}>
                        Seznam přihlášek
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    actualGame: state.games.game.actualGame,
});

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationConfirmation)