import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { TAB_BORDER } from '../../styles';
import Tab, { TAB_HEIGHT } from './Tab';


const tabsStyle = () => css`
  &.Tabs {
    align-items: center;
    border-bottom: 1px solid ${ TAB_BORDER };
    display: flex;
    font-size: 1.2rem;
    height: ${ TAB_HEIGHT }px;
    justify-content: center;
    line-height: 1.4rem;
    margin: 0px auto;
    margin-bottom: 20px;
    text-transform: capitalize;
    width: 100%;
  }
`;

interface Dependencies {
  Tab: typeof Tab;
}

interface Props {
  children: (deps: Dependencies) => JSX.Element;
}

const Tabs: React.FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className="Tabs" css={tabsStyle}>
    { children({ Tab })}
  </div>
);

export default Tabs;
