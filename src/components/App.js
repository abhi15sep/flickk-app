import React, { Component, Fragment } from "react";
import "../App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import MovieCard from "./MovieCard";
import Cast from "./Cast";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movie/:movieID" component={MovieCard} />
            <Route exact path="/cast/:personID" component={Cast} />
          </Switch>
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;
