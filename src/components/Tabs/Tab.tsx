import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { TAB_BORDER, TAB_BORDER_ACTIVE, TAB_COLOR, TAB_COLOR_ACTIVE } from '../../styles';

export const TAB_HEIGHT = 52;

const tabStyle = () => css`  
  &.Tabs-tab {
    align-items: center;
    display: inline-flex;
    border-bottom: 0.3rem solid transparent;
    color: ${ TAB_COLOR };
    cursor: pointer;
    height: ${ TAB_HEIGHT }px;
    margin: 0 2rem;
    padding: 1.2rem 0;
    transition: border-bottom 0.2s;

    &:not(.Tabs-tab--active):hover {
      border-bottom-color: ${ TAB_BORDER };
    }

    &--active {
      border-bottom: 0.3rem solid ${ TAB_BORDER_ACTIVE };
      color: ${ TAB_COLOR_ACTIVE };
      cursor: default;
    }
  }
`;

interface Props {
  active?: boolean;
  onClick: () => void;
}

const Tab: React.FC<PropsWithChildren<Props>> = ({ active = false, children, onClick }) => (
  <div
    css={ tabStyle }
    className={ `Tabs-tab${ active ? ' Tabs-tab--active' : ''}` }
    onClick={ onClick }
  >
    { children }
  </div>
);

export default Tab;
