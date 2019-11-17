import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import FutureGames from "./components/FutureGames";
import FindGames from "./components/FindGames";


class Home extends React.Component {
    componentDidMount() {

    }

    renderList = () => {
        if (this.props.user.user.profile === 'user') {
            return (
                <FindGames />
            );
        }
        return (
            <FutureGames />
        )
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(Home);
