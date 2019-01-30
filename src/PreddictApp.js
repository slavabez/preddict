import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const MainPage = () => <div>Main Page</div>;
const Watching = () => <div>Watching Page</div>;

class PreddictApp extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <p>Howdy pardner! {`\u{1F920}`}</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watching">Watching</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/watching" component={Watching} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default PreddictApp;
