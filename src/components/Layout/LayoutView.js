import React, { useEffect, useRef } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { withStyles, CssBaseline } from "@material-ui/core";
import styles from './LayoutStyle';

class Home extends React.Component {
  render() {
    return <h2>Hello, World! - Webpack 5</h2>;
  }
}

const LayoutView = ({
  classes,
}) => {
  
  return (
      <>
        <CssBaseline />
        <HashRouter>
          <div className={classes.content} >
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </HashRouter>
      </>
  );
};

export default withStyles(styles)(LayoutView);
