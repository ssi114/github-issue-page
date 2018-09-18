import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import TableWrapper from './container/TableWrapper';
import Store from './Store'
import "foundation-sites/dist/css/foundation.css";

class RouterIndex extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <hr />
          <Provider store={Store}>
            <Route excat path="/" component={TableWrapper} />
          </Provider>
        </div>
      </Router>
    );
  }
}

export default RouterIndex;
