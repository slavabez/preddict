import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { view } from "react-easy-state";

import MainStore from "./stores/main";
import thumbnail from "./static/reddit_thumb.png";
import nsfwThumbnail from "./static/reddit_nsfw_thumb.png";

const PostContainer = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 1rem;

  svg {
    width: 50px;
    fill: ${props => props.theme.c};
  }
`;

const PostImage = styled.img`
  max-width: 70px;
`;

const About = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeaderLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.e};
`;

const InfoSection = styled.div`
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

const VoteButtons = styled.div``;

const noThumbnailValues = ["default", "self", "nsfw", "image", "spoiler"];

class Post extends Component {
  render() {
    const thumb = this.props.nsfw
      ? nsfwThumbnail
      : noThumbnailValues.includes(this.props.thumbnail)
      ? thumbnail
      : this.props.thumbnail;
    return (
      <PostContainer>
        <PostImage src={thumb} />
        <About>
          <HeaderLink
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title || "The title of the post"}
          </HeaderLink>
          <InfoSection>
            <SubName>{`/r/` + this.props.subreddit || `all`}</SubName>
            <a
              href={this.props.link || `https://reddit.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              see on reddit
            </a>
            <VoteButtons>
              <button>inb4 Front page</button>
              <button>Gonna explode</button>
              <button>Will do ok</button>
              <button>No move</button>
              <button>Sucks</button>
            </VoteButtons>
          </InfoSection>
        </About>
      </PostContainer>
    );
  }
}

Post.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  subreddit: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
  nsfw: PropTypes.bool
};

export default Post;
