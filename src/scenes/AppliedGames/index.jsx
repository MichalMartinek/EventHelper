import React from "react";
import Header from "../../components/Header";
import AppliedGamesList from "../../components/AppliedGamesList";
import {connect} from "react-redux";
import './index.css'

class AppliedGames extends React.Component {


    render() {
        return (
            <div>
                <Header title="Přihlášené akce"/>
                <div className="appliedGamesContainer">
                    <AppliedGamesList applications={this.props.applications}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    applications: state.games.game.applications,
});

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppliedGames)
