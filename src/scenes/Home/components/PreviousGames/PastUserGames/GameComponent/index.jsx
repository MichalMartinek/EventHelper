import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import PlaceIcon from '@material-ui/icons/Place';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from "@material-ui/core/Button";

import StarRatings from "react-star-ratings";

import style from './GameComponent.module.css';

class GameComponent extends React.Component {
    getRatingSection = () => {
        if (this.props.rating === -2) {
            return (
                <span style={{ color: 'darkGray', padding: "5px"}}>
                    {this.props.position}  - Nehodnoceno
                </span>
            );
        }

        if (this.props.rating === -1) {
            return (
                <span style={{ color: 'darkGray'}}>
                    {this.props.position} - Nedostavil se
                    <ThumbDownIcon id={style.icon_bad}/>
                </span>
            )
        }

        return (
            <span>
                {this.props.position} - Hodnoceno
                <ThumbUpIcon id={style.icon_good}/>
            </span>
        )
    };

    handleShowRatingDetail = () => {
      this.props.push(`/pastGame/${this.props.game.id}`);
    };

    render () {
        return (
            <div key={this.props.index} className={style.container }>
                <h2>{this.props.game.home_team} vs. {this.props.game.visitor_team}</h2>
                <div className={style.content_container}>
                    <img className={style.image} src={this.props.game.image} alt={this.props.game.organizer}/>
                    <div className={style.content_info}>
                        <span>
                            <PlaceIcon id={style.icon}/>
                            {this.props.game.place}
                        </span>
                        <span>
                            <ScheduleIcon id={style.icon}/>
                            {this.props.game.date} {this.props.game.time}
                        </span>
                        {this.getRatingSection()}
                    </div>
                </div>
                {this.props.rating >= 0 ? (
                    <div className={style.footer}>
                        <StarRatings
                            rating={this.props.rating}
                            starRatedColor="black"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="2px"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.handleShowRatingDetail(e)}
                        >
                            Hodnocení
                        </Button>
                    </div>
                ) : (
                    <div className={style.footer}>
                        <StarRatings
                            rating={0}
                            starRatedColor="black"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="2px"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            disabled
                        >
                            Hodnocení
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
      push: bindActionCreators(push, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(GameComponent);
