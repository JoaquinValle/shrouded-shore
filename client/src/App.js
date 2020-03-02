// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// React Component/Pages
import Home from "./pages/Home";
import Top from "./pages/Top";
import Categories from "./pages/Categories";
import ByCategory from "./pages/ByCategory";
import Complexity from "./pages/Complexity";
import ByComplexity from "./pages/ByComplexity";
import Game from "./pages/Game";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

// React Components
import Nav from "./components/Nav";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Sidenav img="https://randomuser.me/api/portraits/men/72.jpg" name="John Doe"/>
        <Switch>
          <Route exact path="/top" component={Top} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:category" component={ByCategory} />
          <Route exact path="/complexity" component={Complexity} />
          <Route exact path="/complexity/:complexity" component={ByComplexity} />
          <Route exact path="/games/:id" component={Game} />
          <Route exact path="/search/:search" component={Search} />
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={SavedGames} />
          <Route exact path="/profile" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
