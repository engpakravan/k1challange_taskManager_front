import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {HomeContainer} from "./containers/homeContainer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {CreateTaskContainer} from "./containers/createTaskContainer";
import {ROUTE_CREATE_TASK, ROUTE_HOME} from "./data/route";
import {QueryClient, QueryClientProvider} from "react-query";
import {Container} from "@material-ui/core";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient} >
      <Router>
          <Container fixed className={"mt-3"}>
              <Switch>

                  <Route path={ROUTE_HOME} exact><HomeContainer /></Route>

                  <Route path={ROUTE_CREATE_TASK}><CreateTaskContainer /></Route>

              </Switch>
          </Container>
      </Router>
      </QueryClientProvider>
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
