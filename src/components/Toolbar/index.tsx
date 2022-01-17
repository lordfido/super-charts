import { css } from '@emotion/react';
import React from 'react';

const toolbarStyle = () => css`
  &.Toolbar {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    min-height: 40px;
    padding: 0 20px;

    &--no-padding {
      padding: 0;
    }
  }
`;

interface Props {
  fullWidth?: boolean;
  left?: JSX.Element;
  right?: JSX.Element;
}

const Toolbar: React.FC<Props> = ({ fullWidth = false, left, right }) => (
  <div className={`Toolbar${ fullWidth ? ' Toolbar--no-padding' : ''}`} css={ toolbarStyle }>
    <div className="Toolbar-left">
      { left }
    </div>

    <div className="Toolbar-right">
      { right }
    </div>
  </div>
);

export default Toolbar;
