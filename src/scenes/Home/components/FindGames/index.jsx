import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../FutureGames/actions';

import Header from "../../../../components/Header";
import Filter from "../../../../components/Filter";
import ActionsList from "../../../../components/ActionsList";

import style from './FindGames.module.css';

import { futureGames } from "../../../../database/futureGames";

class FindGames extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeList: this.props.games,
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(games) {
        this.setState({
            activeList: games,
        });
    }

    render () {
        return (
          <div>
              <Header title="Hledat akci" />
              <div className={style.container}>
                  <Filter games={this.props.games} callback={this.handleFilter}/>
                  <ActionsList games={this.state.activeList}/>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    games: state.games.futureGames.findGames,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindGames);
