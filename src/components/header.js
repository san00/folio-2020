import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 0.1em solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 700px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="700">
      FOLIO 2020
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        about
      </NavLink>
    </nav>
  </header>
);

export default Header;
