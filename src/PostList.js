import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { view } from "react-easy-state";

import mainState from "./stores/main";
import Post from "./Post";

const List = styled.div``;

const ControlsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    margin-left: 2rem;
    color: ${props => props.theme.c};
  }

  span {
    text-decoration: underline;
  }
`;

const ToggleButton = styled.button`
  font-size: 1.2rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.b};
  border-radius: 0.5rem;
  background-color: ${props => props.theme.f};
  color: ${props => props.theme.a};
`;

class PostList extends Component {
  async componentDidMount() {
    const posts = await axios.get(`https://reddit.com/r/all/new.json`);
    mainState.posts = posts.data.data.children;
  }

  loadSubreddit = sub => {};

  toggleNSFWFilter = () => {
    mainState.showNSFW = !mainState.showNSFW;
  };

  renderPosts() {
    return mainState.posts
      .filter(p => false)
      .map(p => (
        <Post
          key={p.id}
          thumbnail={p.thumbnail}
          title={p.title}
          subreddit={p.subreddit}
          link={p.url}
        />
      ));
  }

  render() {
    const toggleText = mainState.showNSFW ? "Hide" : "Show";
    return (
      <List>
        <ControlsList>
          <h1>
            You are viewing: /r/<span>{`${mainState.filteredSub}`}</span>/new
          </h1>
          <ToggleButton onClick={this.toggleNSFWFilter}>
            {toggleText} NSFW
          </ToggleButton>
        </ControlsList>
        {mainState.posts
          // Show non-over 18 unless showNSFW is ON
          .filter(p => !p.data.over_18 || mainState.showNSFW)
          .map(p => (
            <Post
              key={p.data.id}
              thumbnail={p.data.thumbnail}
              title={p.data.title}
              subreddit={p.data.subreddit}
              link={p.data.url}
              nsfw={p.data.over_18}
            />
          ))}
      </List>
    );
  }
}

export default view(PostList);
