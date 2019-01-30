import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
`;
const SearchInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem 0.2rem;
  border-radius: 0.25rem;
`;
const PopularSubContainer = styled.div`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(12, minmax(35px, auto));
  grid-gap: 1rem;
`;
const PopularSub = styled.span`
  font-size: 1.2rem;
`;

export default class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchInput type="text" placeholder="Subreddit name here..." />
        <PopularSubContainer>
          <PopularSub>/r/funny</PopularSub>
          <PopularSub>/r/Aww</PopularSub>
          <PopularSub>/r/ShowerThoughts</PopularSub>
          <PopularSub>/r/LifeHacks</PopularSub>
        </PopularSubContainer>
      </Wrapper>
    );
  }
}
