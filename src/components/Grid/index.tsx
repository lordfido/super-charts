import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';

const gridStyle = (columns: number) => css`
  &.Grid {
    display: grid;
    grid-template-columns: repeat(${columns}, ${100 / columns}%);
    grid-template-rows: 1fr;
    grid-gap: 20px;
    padding: 20px;
    width: 100%;
  }
`

interface Props {
  columns?: number;
}

const Grid: React.FC<PropsWithChildren<Props>> = ({ children, columns = 2 }) => (
  <div css={ () => gridStyle(columns) } className="Grid">
    { children }
  </div>
);

export default Grid;
