import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../FutureGames/actions';

import Header from "../../../../components/Header";
import Filter from "../../../../components/Filter";
import ActionsList from "../../../../components/ActionsList";
import CircularProgress from '@material-ui/core/CircularProgress';

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

    handleFilter(query) {
        this.props.actions.setFiltering(true);
        this.props.actions.saveFilterQuery(query);
        this.filterGames(query);
        setTimeout(() => {
            this.props.actions.setFiltering(false);
        }, 500);
    }

    filterGames(query){
        const tmpArr = [];
        this.props.games.forEach((game) => {
            let value = (query).toLowerCase();
            if (
                game.home_team.toLowerCase().includes(value)
                ||
                game.visitor_team.toLowerCase().includes(value)
                ||
                game.place.toLowerCase().includes(value)
                ||
                game.time.toLowerCase().includes(value)
                ||
                game.organizer.toLowerCase().includes(value)
                ||
                game.sport.toLowerCase().includes(value)
            ) {
                tmpArr.push(game);
            }
        });
        this.setState(Object.assign({}, this.state, {activeList: tmpArr}));
    }

    componentDidMount() {
        this.filterGames(this.props.filterQuery);
    }

    render () {
        return (
          <div>
              <Header title="Hledat akci" />
              <div className={style.container}>
                  <Filter callback={this.handleFilter} filterQuery={this.props.filterQuery}/>
                  { this.props.filtering ? (
                      <CircularProgress size="5em" style={{ margin: '40px auto'}}/>
                  ) : (
                      <ActionsList games={this.state.activeList}/>
                  )}
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    games: state.games.futureGames.findGames,
    filterQuery: state.games.futureGames.filterQuery,
    filtering: state.games.futureGames.filtering,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindGames);
