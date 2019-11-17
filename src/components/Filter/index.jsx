import React from "react";

import style from './Filter.module.css';
import TextField from "@material-ui/core/TextField";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
        }
    }

    handleChange = (e) => {
        const tmpArr = {};

        this.props.games.forEach((game) => {
            const tmp = [];
            const tmpStruct = {};
            game.forEach((detail) => {
                if (detail.home_team.includes(e.target.value) || detail.visitor_team.includes(e.target.value)) {
                    tmp.push(detail);
                }
            });
            if (tmp.length > 0) {
                tmpStruct.date = game.date;
                tmpStruct.games = tmp;
                tmpArr.push(tmpStruct);
            }
        });
        this.setState({
            searchText: e.target.value,
        });
        this.props.callback(tmpArr);
    }

    render() {
        return (
            <div className={style.filter}>
                <TextField
                    className={style.inputContainer}
                    label="Hledat"
                    type="text"
                    name="Filter"
                    variant="outlined"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


export default Filter;
