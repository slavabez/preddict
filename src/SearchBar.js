import React, { Component } from "react";
import styled from "styled-components";

import SearchSvg from "./svgs/Search";
import { view } from "react-easy-state";

import mainState from "./stores/main";

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
const PopularSubButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0.2rem 0.2rem;
  border: 1px solid ${props => props.theme.b};
  border-radius: 0.5rem;
  background-color: ${props => props.theme.g};
  color: ${props => props.theme.main};
  cursor: pointer;
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

const popularSubs = [
  "all",
  "funny",
  "AskReddit",
  "gaming",
  "pics",
  "science",
  "worldnews",
  "todayilearned",
  "videos",
  "movies",
  "aww",
  "IAmA",
  "Music",
  "gifs",
  "news",
  "EarthPorn"
];

class SearchErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorText: "" };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true, errorText: error };
  }

  componentDidCatch(error, info) {
    // Log error to Sentry
  }

  render() {
    if (this.state.hasError) {
      return <SearchBar error={this.state.errorText} />;
    }
    return <SearchBar />;
  }
}

class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchForm>
          <label htmlFor="subSearch">
            <SearchSvg color="#5CF0F7" />
          </label>
          <SearchInput
            id="subSearch"
            type="text"
            placeholder="Get new posts from a subreddit..."
          />
        </SearchForm>
        <PopularSubContainer>
          {popularSubs.map(s => (
            <PopularSub
              key={s}
              subName={s}
              onClick={() => {
                mainState.loadSub(s);
              }}
            />
          ))}
        </PopularSubContainer>
      </Wrapper>
    );
  }
}

const PopularSub = props => (
  <PopularSubButton
    title={`Show new posts from /r/${props.subName}`}
    onClick={props.onClick}
  >
    /r/{props.subName}
  </PopularSubButton>
);

export default view(SearchErrorBoundary);
