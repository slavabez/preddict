import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import thumbnail from "./static/reddit_thumb.png";

const PostContainer = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr auto;
  grid-gap: 0.5rem;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 1rem;
`;

const PostImage = styled.img`
  max-width: 140px;
`;

const Post = props => (
  <PostContainer>
    <PostImage src={props.thumbnail || thumbnail} />
    <div>
      <h2>{props.title || "The title of the post"}</h2>
      <span>{props.link || "The link to the post"}</span>
    </div>
    <p>Vote</p>
  </PostContainer>
);

PointerEvent.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string
};

const List = styled.div``;

export default class PostList extends Component {
  render() {
    return (
      <List>
        <Post />
        <Post />
        <Post />
        <Post />
      </List>
    );
  }
}
