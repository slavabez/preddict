import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => <div>Main Page</div>;
const Watching = () => <div>Watching Page</div>;

const AppWrapper = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 5px;

  a {
    font-size: 4rem;
    text-decoration: none;
    padding: 0.5rem;
  }
`;

const Content = styled.div`
  display: grid;
`;

class PreddictApp extends Component {
  render() {
    return (
      <Router className="App">
        <AppWrapper>
          <Navigation>
            <Link to="/" title="Go Home">
              🏡
            </Link>
            <Link to="/watching" title="Go to Watching">
              👀
            </Link>
          </Navigation>
          <Switch>
            <Content>
              <Route path="/" exact component={MainPage} />
              <Route path="/watching" component={Watching} />
            </Content>
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default PreddictApp;
