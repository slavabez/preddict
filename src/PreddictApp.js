import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import theme from "./style/themes";

import Navigation from "./NavigationBar";
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

  color: ${props => props.theme.d};
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
            <Navigation />
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
