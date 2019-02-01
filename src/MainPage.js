import React, { Component } from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import PostList from "./PostList";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5rem;
`;

export default class MainPage extends Component {
  render() {
    return (
      <MainContainer>
        <SearchBar />
        <PostList />
      </MainContainer>
    );
  }
}
