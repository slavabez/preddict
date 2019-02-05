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
    text-decoration: none;
  }
`;

const SubName = styled.span`
  color: ${props => props.theme.c};
`;

const noThumbnailValues = ["default", "self", "nsfw", "image"];

class Post extends Component {
  render() {
    return (
      <PostContainer>
        <PostImage
          src={
            noThumbnailValues.includes(this.props.thumbnail)
              ? thumbnail
              : this.props.thumbnail
          }
        />
        <About>
          <Heading>
            <h2>{this.props.title || "The title of the post"}</h2>
            <SubName>{this.props.subreddit || `/r/all`}</SubName>
            <a
              href={this.props.link || `https://reddit.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              see on reddit
            </a>
          </Heading>

          <span>{this.props.link || "The link to the post"}</span>
        </About>
        <button>Vote</button>
      </PostContainer>
    );
  }
}

Post.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  subreddit: PropTypes.string,
  link: PropTypes.string
};

export default Post;
