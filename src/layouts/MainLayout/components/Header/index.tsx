import { css } from '@emotion/react';
import React from 'react';
import logo from '../../../../assets/logo.svg';
import { HEADER_BG, HEADER_BORDER, HEADER_COLOR } from '../../../../styles';
import getLayerPosition from '../../../../styles/zIndex';

const headerHeight = 42;

const headerStyle = () => css`
  &.Header {
    align-items: center;
    background-color: ${ HEADER_BG };
    border-bottom: 1px solid ${ HEADER_BORDER };
    color: ${ HEADER_COLOR };
    display: flex;
    height: ${headerHeight}px;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: ${ getLayerPosition('HEADER') };

    & > * {
      margin-right: 10px;
      max-height: 100%;

      &:last-child {
        margin-right: 0;
      }
    }

    .Header-logo {
      height: 24px;
    }
  }
`;

const headerSpacerStyle = () => css`
  &.Header-spacer {
    height: ${ headerHeight }px;
    width: 100%;
  }
`;

const Header: React.FC = () => (
  <>
    <header css={ headerStyle } className="Header">
      <a
        className="Header-logoLink"
        href="https://athenian.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="Header-logo" src={logo} alt="Athenian logo"/>
      </a>

      <span className="Header-text">Athenian WebApp Tech Assessment</span>
    </header>

    <div css={ headerSpacerStyle } className="Header-spacer" />
  </>
)

export default Header;
