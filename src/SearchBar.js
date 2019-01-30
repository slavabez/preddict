import React, { Component } from "react";
import styled from "styled-components";

const SearchInput = styled.input``;
const PopularSubContainer = styled.div``;
const PopularSub = styled.span``;

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <SearchInput type="text" value="Subreddit name here..." />
        <PopularSubContainer>
          <PopularSub>/r/funny</PopularSub>
          <PopularSub>/r/Aww</PopularSub>
          <PopularSub>/r/ShowerThoughts</PopularSub>
          <PopularSub>/r/LifeHacks</PopularSub>
        </PopularSubContainer>
      </div>
    );
  }
}
