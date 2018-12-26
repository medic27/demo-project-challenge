import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Questionnaire from "./components/Questionnaire";
import Header from "./components/Header";

const Routes = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/res/:id" component={Questionnaire} />
    </React.Fragment>
  </Router>
);

export default Routes;
