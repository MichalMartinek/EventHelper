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
        const tmpArr = [];
        this.props.games.forEach((game) => {
            if (game.home_team.toLowerCase().includes(e.target.value) || game.visitor_team.toLowerCase().includes(e.target.value)) {
                tmpArr.push(game);
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
