import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Categories from "./pages/Categories";
import Complexity from "./pages/Complexity";
import Game from "./pages/Game";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Sidenav from "./components/Sidenav";
// import Background from "./components/Background";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Sidenav/>
        <Switch>
          <Route exact path="/top" component={Top} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/complexity" component={Complexity} />
          <Route exact path="/games/:id" component={Game} />
          <Route exact path="/search/:search" component={Search} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
