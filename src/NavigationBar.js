import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import theme from "./style/themes";

import EyeSvg from "./svgs/Eye";
import HouseSvg from "./svgs/House";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: ${props => props.theme.b};
  a {
    font-size: 4rem;
    text-decoration: none;
    padding: 0.5rem;
    border-right: 2px solid transparent;
  }

  a.active {
    border-right: 2px solid ${props => props.theme.c};
  }
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <Navigation>
        <NavLink exact to="/" title="Go Home" activeClassName="active">
          <span role="img" aria-label="Go Home">
            <HouseSvg color={theme.c} />
          </span>
        </NavLink>
        <NavLink to="/watching" title="Go to Watching" activeClassName="active">
          <span role="img" aria-label="Go to Watching">
            <EyeSvg color={theme.c} />
          </span>
        </NavLink>
      </Navigation>
    );
  }
}
