import React from "react";

import style from './Filter.module.css';
import TextField from "@material-ui/core/TextField";

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.callback(e.target.value);
    };

    render() {
        return (
            <div className={style.filter}>
                <TextField
                    className={style.inputContainer}
                    label="Hledat"
                    type="text"
                    name="Filter"
                    variant="outlined"
                    value={this.props.filterQuery}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


export default Filter;
