import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from 'react-router-redux';

import PlaceIcon from '@material-ui/icons/Place';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MoneyIcon from '@material-ui/icons/Money';
import style from "./ActionComponent.module.css";
import Button from "@material-ui/core/Button";

import "./ActionComponent.module.css";

class ActionComponent extends React.Component {
    showDetail  = () => {
        this.props.push(`/game/${this.props.game.id}`);
    };

    render() {
        const {
            home_team,
            visitor_team,
            place,
            time,
            salary,
            date,
            freePosts,
            sport,
            image
        } = this.props.game;

        return (
          <div className={style.container} key={this.props.index}>
              <h2 className={style.title}>{home_team} vs {visitor_team}</h2>
              <div className={style.row}>
                  <img className={style.image} src={image} alt={sport}/>
                  <div className={style.positions}>
                      <h3>Volné pozice</h3>
                      <ul>
                          {freePosts.map((position) =>
                            <li>{position}</li>
                          )}
                      </ul>
                  </div>
              </div>
              <div className={style.row}>
                  <div className={style.game_info}>
                      <span>
                          <PlaceIcon className={style.icon} />
                          {place}
                      </span>
                      <span>
                          <ScheduleIcon className={style.icon} />
                          {date} {time}
                      </span>
                      <span>
                          <MoneyIcon className={style.icon} />
                          {salary}
                          Kč/h
                      </span>
                  </div>
                  <div className={style.button_more}>
                      <Button
                          variant="contained"
                          color="primary"
                          onClick={this.showDetail}
                      >
                          Více
                      </Button>
                  </div>
              </div>
          </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ActionComponent);
