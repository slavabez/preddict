import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

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
    text-decoration: none;
  }
`;

const SubName = styled.span`
  color: ${props => props.theme.c};
`;

const noThumbnailValues = ["default", "self", "nsfw"];

const Post = props => (
  <PostContainer>
    <PostImage
      src={
        noThumbnailValues.includes(props.thumbnail)
          ? thumbnail
          : props.thumbnail
      }
    />
    <About>
      <Heading>
        <h2>{props.title || "The title of the post"}</h2>
        <SubName>{props.subreddit || `/r/all`}</SubName>
        <a
          href={props.link || `https://reddit.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          see on reddit
        </a>
      </Heading>

      <span>{props.link || "The link to the post"}</span>
    </About>
    <button>Vote</button>
  </PostContainer>
);

Post.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  subreddit: PropTypes.string,
  link: PropTypes.string
};

const List = styled.div``;

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const posts = await axios.get(`https://www.reddit.com/r/all/new.json`);
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
