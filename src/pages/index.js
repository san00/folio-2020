import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>hello this is my site</h1>
      <p>welcome folio</p>

      <h2>Blog</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
