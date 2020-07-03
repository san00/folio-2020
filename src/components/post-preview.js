import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
// import ReadLink from './read-link';

const PostPreview = ({ post }) => {
 if (post.image === null) {
    return null;
  }
  
  return (
    <article>
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100%;
        `} >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.alt}
        />
      </Link>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
    </article>
  );
};

export default PostPreview;
