import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import theme from "./style/themes";

import { ReactComponent as EyeSvg } from "./static/eye.svg";
import { ReactComponent as HouseSvg } from "./static/house.svg";

import MainPage from "./MainPage";
const Watching = () => <div>Watching Page</div>;

const AppWrapper = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr;
  padding: 0.5rem;
  grid-gap: 0.5rem;
  background-color: ${props => props.theme.bg};
  background: linear-gradient(
    to right,
    ${props => props.theme.a},
    ${props => props.theme.a}
  );
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: ${props => props.theme.b};
  a {
    font-size: 4rem;
    text-decoration: none;
    padding: 0.5rem;
  }

  a.active {
    background-color: white;
  }
`;

const Content = styled.div`
  display: grid;
`;

class PreddictApp extends Component {
  render() {
    return (
      <Router className="App">
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Navigation>
              <NavLink exact to="/" title="Go Home" activeClassName="active">
                <span role="img" aria-label="Go Home">
                  <HouseSvg />
                </span>
              </NavLink>
              <NavLink
                to="/watching"
                title="Go to Watching"
                activeClassName="active"
              >
                <span role="img" aria-label="Go to Watching">
                  <EyeSvg />
                </span>
              </NavLink>
            </Navigation>
            <Switch>
              <Content>
                <Route path="/" exact component={MainPage} />
                <Route path="/watching" component={Watching} />
              </Content>
            </Switch>
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default PreddictApp;
