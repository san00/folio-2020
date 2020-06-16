import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={`
  
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  
  * + * {
      margin-top: 1rem; 
  }
  
  html,
  body {
      margin:0;
      font- family: -apple-system, BlinkMacSystemFont, 'Sego UI',
      Roboto, Helvetica, Arial, sans-serif:
      font-size:18px;
      line height:1.4;
      color:#555
  }
  
  /* remove margin top for the main div gatsby mounts into */
  >div {
      margin-top: 0; 
  }
  
  h1,
  h2,
  h3,
  h4,
  h5
  ,h6{
      line-height:1.1;
      color:#222;
  }
  
  +* {
      margin-top: 0.5rem; 
  }
  strong{
      color:#222;
  }
  
  li{
      margin-top: 0.25rem; 
  }
  
  `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 700px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
