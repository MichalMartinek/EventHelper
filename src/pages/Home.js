import React from 'react';
import Button from '@material-ui/core/Button';
import AuthorizationContext from '../shared/context'

class Home extends React.Component {
  static contextType = AuthorizationContext;

  render() {
    if (this.context) {
      return (
        <div className="App">
          <Button variant="contained" color="primary">
            welcome
          </Button>
        </div>
      );
    }
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Home;
