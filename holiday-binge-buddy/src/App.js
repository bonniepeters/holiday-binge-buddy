import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Shows from "./Components/Shows/Shows";
import Show from "./Components/Show/Show";
import Episodes from "./Components/Episodes/Episodes";
import Episode from "./Components/Episode/Episode";
import Header from "./Components/Header/Header";
import NewShow from "./Components/NewShow/NewShow";

// console.log(process.env.REACT_APP_OMDB_API_KEY)
// const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact={true} path="/holiday-binge-buddy/" component={Shows} />{" "}
            <Route exact={true} path="/holiday-binge-buddy/show/add" component={NewShow} />
            <Route exact={true} path="/holiday-binge-buddy/episodes" component={Episodes} />
            <Route
              path="/holiday-binge-buddy/shows/:id"
              render={routerProps => (
                <Show match={routerProps.match} id={this.props.id} />
              )}
            />
            <Route
              path="/holiday-binge-buddy/episodes/:id"
              render={routerProps => (
                <Episode match={routerProps.match} id={this.props.id} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
