import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Dashboard from './containers/Dashboard';
import WorkspaceForm from './containers/WorkspaceForm';
import SignInForm from './containers/SignInForm';

import './css/styles.scss';

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route path="/" exact component={WorkspaceForm} />
            <Route path="/slack-react-redux/" exact component={WorkspaceForm} />
            <Route path="/slack-react-redux/signin" component={SignInForm}/>
            <Route path="/slack-react-redux/dashboard" component={Dashboard} />
          </Switch>
        </App>
      </Router>
  </Provider>,
  rootEl
);
