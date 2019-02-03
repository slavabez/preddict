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
  max-width: 100px;
`;

const About = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 1.8rem;
    margin-right: 1rem;
  }

  span {
    font-size: 1.2rem;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0.2rem;
  }

  a {
    padding: 0.2rem 0.4rem;
    color: ${props => props.theme.d};
    border: 1px solid ${props => props.theme.d};
    border-radius: 0.5rem;
  }
`;

const SubName = styled.span`
  color: ${props => props.theme.c};
`;

const Post = props => (
  <PostContainer>
    <PostImage src={props.thumbnail || thumbnail} />
    <About>
      <Heading>
        <h2>{props.title || "The title of the post"}</h2>
        <SubName>/r/funny</SubName>
        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
          see on reddit
        </a>
      </Heading>

      <span>{props.link || "The link to the post"}</span>
    </About>
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
