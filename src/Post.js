import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
  justify-content: space-between;

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

const InfoInner = styled.div`
  display: flex;
  align-items: center;
`;

const SubName = styled.span`
  color: ${props => props.theme.c};
  padding: 0.2rem;
`;

const VoteButtons = styled.div`
  button {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.2rem 0.2rem;
    border: 1px solid ${props => props.theme.b};
    border-radius: 0.5rem;
    background-color: ${props => props.theme.g};
    color: ${props => props.theme.main};
    cursor: pointer;
  }
`;

const noThumbnailValues = ["default", "self", "nsfw", "image", "spoiler"];

class Post extends Component {
  render() {
    // If post is NSFW show red thumbnail, if of the above noThumbnailValues, don't show the thumbnail
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
            <InfoInner>
              <SubName>{`/r/` + this.props.subreddit || `all`}</SubName>
              <a
                href={`https://reddit.com` + this.props.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                see on reddit
              </a>
            </InfoInner>
            <VoteButtons>
              <button
                onClick={() => {
                  this.props.predictFunc(this.props, 5);
                }}
              >
                inb4 Front page
              </button>
              <button
                onClick={() => {
                  this.props.predictFunc(this.props, 4);
                }}
              >
                Gonna explode
              </button>
              <button
                onClick={() => {
                  this.props.predictFunc(this.props, 3);
                }}
              >
                Will do ok
              </button>
              <button
                onClick={() => {
                  this.props.predictFunc(this.props, 2);
                }}
              >
                No move
              </button>
              <button
                onClick={() => {
                  this.props.predictFunc(this.props, 1);
                }}
              >
                Sucks
              </button>
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
  nsfw: PropTypes.bool,
  permalink: PropTypes.string,
  predictFunc: PropTypes.func
};

export default Post;
