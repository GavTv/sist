import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import ContactsAndRegistration from "./views/contacts-and-registration";
import Home from "./views/home";
import DisciplinesClasses from "./views/disciplines-classes";
import AboutUs from "./views/about-us";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          component={ContactsAndRegistration}
          exact
          path="/contacts-and-registration"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={DisciplinesClasses}
          exact
          path="/disciplines-classes"
        />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
