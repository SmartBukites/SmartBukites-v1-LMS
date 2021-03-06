import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>

        <Redirect from="*" to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
