import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            alt
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  
  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    alt: post.frontmatter.alt,
    excerpt: post.frontmatter.excerpt,
  }));
};

export default usePosts;
