import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Post from "./Post";

const List = styled.div``;

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const posts = await axios.get(`/sample.json`);
    this.setState({ posts: posts.data.data.children });
  }

  renderPosts() {
    return this.state.posts.map(p => (
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
    return (
      <List>
        {this.state.posts.map(p => (
          <Post
            key={p.data.id}
            thumbnail={p.data.thumbnail}
            title={p.data.title}
            subreddit={p.data.subreddit}
            link={p.data.url}
          />
        ))}
      </List>
    );
  }
}
