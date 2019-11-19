import React from "react";
import {withRouter} from 'react-router-dom';
import {ArrowBack} from "@material-ui/icons";

import styles from "./StepBack.module.css"

class StepBack extends React.Component{

    handleBack = () => {
        console.log(this.props);
        this.props.history.goBack();
    };

    render() {
           return(
               <div className={styles.stepBackWrapper} onClick={this.handleBack}>
                   <ArrowBack/> Zpět
               </div>
           )
    }
}

export default withRouter(StepBack);
