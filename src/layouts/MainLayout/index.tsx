import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import Header from './components/Header';

const mainLayoutStyle = () => css`
  &.MainLayout {
    .MainLayout-content {
      margin: 0 auto;
      max-width: 1280px;
    }
  }
`;

const MainLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div css={mainLayoutStyle} className="MainLayout">
    <Header />

    <main className="MainLayout-content">
      { children }
    </main>
  </div>
)

export default MainLayout;
