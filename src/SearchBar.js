import React, { Component } from "react";
import styled from "styled-components";

import SearchSvg from "./svgs/Search";

const Wrapper = styled.div`
  padding: 1rem;
`;
const SearchInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: none;
  background-color: ${props => props.theme.b};
  color: ${props => props.theme.d};
  outline-color: ${props => props.theme.c};
`;
const PopularSubContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
`;
const PopularSub = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0.2rem 0.2rem;
  border: 1px solid ${props => props.theme.b};
  border-radius: 0.5rem;
  background-color: ${props => props.theme.f};
  color: ${props => props.theme.a};
`;
const SearchForm = styled.form`
  border-radius: 0.25rem;
  background-color: ${props => props.theme.b};

  display: flex;
  align-items: center;

  svg {
    height: 20px;
    width: 20px;
    padding: 10px;
  }
`;

export default class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchForm>
          <SearchSvg color="#5CF0F7" />
          <SearchInput type="text" placeholder="Subreddit name here..." />
        </SearchForm>
        <PopularSubContainer>
          <PopularSub>/r/all</PopularSub>
          <PopularSub>/r/Funny</PopularSub>
          <PopularSub>/r/Aww</PopularSub>
          <PopularSub>/r/ShowerThoughts</PopularSub>
          <PopularSub>/r/LifeHacks</PopularSub>
          <PopularSub>/r/all</PopularSub>
          <PopularSub>/r/Funny</PopularSub>
          <PopularSub>/r/Aww</PopularSub>
          <PopularSub>/r/ShowerThoughts</PopularSub>
          <PopularSub>/r/LifeHacks</PopularSub>
          <PopularSub>/r/all</PopularSub>
          <PopularSub>/r/Funny</PopularSub>
          <PopularSub>/r/Aww</PopularSub>
          <PopularSub>/r/ShowerThoughts</PopularSub>
          <PopularSub>/r/LifeHacks</PopularSub>
          <PopularSub>/r/all</PopularSub>
          <PopularSub>/r/Funny</PopularSub>
          <PopularSub>/r/Aww</PopularSub>
          <PopularSub>/r/ShowerThoughts</PopularSub>
          <PopularSub>/r/LifeHacks</PopularSub>
        </PopularSubContainer>
      </Wrapper>
    );
  }
}
