import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { CARD_BG, CARD_BORDER, CARD_TITLE_COLOR } from '../../styles';

const cardStyle = () => css`
  &.Card {
    align-items: center;
    background-color: ${ CARD_BG };
    border: 1px solid ${ CARD_BORDER };
    border-radius: 0.35rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    .Card-title,
    .Card-content {
      align-items: center;
      display: flex;
      width: 100%;
    }

    .Card-title {
      border-bottom: 1px solid ${ CARD_BORDER };
      color: ${ CARD_TITLE_COLOR };
      font-size: 1.4rem;
      font-weight: 400;
      padding: 2rem;
      line-height: 2rem;
    }

    .Card-content {
      flex-idrection: column;
      flex: 1;
      padding: 3.2rem 2rem;
    }
  }
`;

interface Props {
  title?: string;
}

const Card: React.FC<PropsWithChildren<Props>> = ({ children, title }) => (
  <div css={ cardStyle } className="Card">
    { !!title && (
      <div className="Card-title">
        { title }
      </div>
    ) }

    <div className="Card-content">
      { children }
    </div>
  </div>
)

export default Card;
