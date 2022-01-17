import { css, SerializedStyles } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { TITLE1_COLOR } from '../../styles';

interface Props {
  type: 'title1';
  // type: 'title1' | 'title2' | 'body1' | 'body2';
}

const title1Style = () => css`
  &,
  & * {
    color: ${ TITLE1_COLOR };
    font-size: 2.1rem;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 31.5px;
    margin: 0;
  }

  & {
    margin-bottom: 20px;
  }
`;

type ReturnType = () => SerializedStyles | undefined;

const getStyles = (type: Props['type']): ReturnType => {
  switch (type) {
    case 'title1':
      return title1Style;

    default:
      return () => undefined;
  }
}

const Typography: React.FC<PropsWithChildren<Props>> = ({ children, type }) => {
  const styles = getStyles(type);

  return (
    <div css={ styles }>
      { children }
    </div>
  )
}

export default Typography;
