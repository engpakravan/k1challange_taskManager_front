import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Home} from "./containers/home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {CreateTaskContainer} from "./containers/createTaskContainer";
import {ROUTE_CREATE_TASK, ROUTE_HOME} from "./data/route";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div className="container bg-white p-3 mt-3 shadow-lg">
              <Switch>

                  <Route path={ROUTE_HOME} exact><Home /></Route>

                  <Route path={ROUTE_CREATE_TASK}><CreateTaskContainer /></Route>

              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();