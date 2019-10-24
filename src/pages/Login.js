import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.css'
import {Facebook} from '@material-ui/icons';
import { useHistory } from "react-router-dom";

function Login() {

  let history = useHistory();
  return (
    <div className={styles.container}>
      <TextField
        className={styles.inputContainer}
        label="Email"
        type="email"
        name="email"
        variant="outlined"
      />
      <TextField
        className={styles.inputContainer}
        label="Heslo"
        type="password"
        name="email"
        variant="outlined"
      />

      <Button
        className={styles.inputContainer}
        variant="contained"
        color="primary"
        startIcon={<Facebook />}
        onClick={() => history.push("/events")}
      >
        Login with Facebook
      </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push("/events")}
    >
      Login
    </Button>
    </div>
  );
}

export default Login;
