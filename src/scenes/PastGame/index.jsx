import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import * as actions from './actions';
import Header from "../../components/Header";
import StarRatings from "react-star-ratings";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress"
import PlaceIcon from '@material-ui/icons/Place';
import ScheduleIcon from '@material-ui/icons/Schedule';

import style from './PastGame.module.css';

class PastGame extends React.Component {
    componentDidMount() {
        this.props.actions.fetchGame(this.props.match.params.id);
    }

    render() {
        if (this.props.game === null) {
           return (<CircularProgress color="primary" />);
        }
        return (
            <div>
                <Header title="Proběhlé akce"/>
                <div className={style.container}>
                    <h1 className={style.title}>{this.props.game.game.home_team} vs {this.props.game.game.visitor_team}</h1>
                    <div className={style.content_container}>
                        <img src={this.props.game.game.image} className={style.image}/>
                        <div className={style.content_info}>
                            <span>
                                <PlaceIcon id={style.icon} />
                                {this.props.game.game.place}
                            </span>
                            <span>
                                <ScheduleIcon id={style.icon} />
                                {this.props.game.game.date} {this.props.game.game.time}
                            </span>
                        </div>
                    </div>
                    <StarRatings
                        rating={this.props.game.rating}
                        starRatedColor="black"
                        numberOfStars={5}
                        name="rating"
                        starDimension="40px"
                        starSpacing="2px"
                    />
                   <div className={style.other_info}>
                       <div>
                           <h3>Hodnocení</h3>
                           <p>{this.props.game.comment}</p>
                       </div>
                       <div>
                           <h3>Odměna</h3>
                           <span>{this.props.game.game.salary} Kč</span>
                       </div>
                   </div>
                    <Button
                        id={style.back_button}
                        variant="contained"
                        color="primary"
                        onClick={() => this.props.push('/pastActions')}
                    >
                        Zpět
                    </Button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch),
    };
}

const mapStateToProps = state => ({
    game: state.games.pastGame.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(PastGame);
