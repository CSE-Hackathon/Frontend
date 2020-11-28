import React ,{Fragment}from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component imports

import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/layout/Landing";
import Workers from "./components/workers/Workerslist";
import WorkerDetail from "./components/workers/Workerdetail";
import PrivateRoute from "./components/routing/PrivateRoute";




function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <section >
        <Switch>
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/workers" component={Workers} />
          <PrivateRoute exact path="/:id" component={WorkerDetail} />
        </Switch>
      </section>
    </Fragment>
  </Router>
  );
}

export default App;
