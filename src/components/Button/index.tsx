import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import {
  BUTTON_BG,
  BUTTON_BG_PRIMARY,
  BUTTON_BORDER,
  BUTTON_BORDER_HOVER,
  BUTTON_COLOR,
  BUTTON_COLOR_PRIMARY
} from '../../styles';

export const buttonStyles = () => css`
  &.Button,
  // I cannot change this buttons' className, so I need to add an exception
  &.react-datepicker__navigation {
    align-items: center;
    background-color: ${ BUTTON_BG };
    border: 1px solid ${ BUTTON_BORDER };
    border-radius: 3px;
    color: ${ BUTTON_COLOR };
    cursor: pointer;
    display: flex;
    font-size: 1.2rem;
    height: 32px;
    justify-content: center;
    padding: 6px 9px;

    &:hover {
      border-color: ${ BUTTON_BORDER_HOVER };
    }

    &--primary {
      background-color: ${ BUTTON_BG_PRIMARY };
      border-color: ${ BUTTON_BG_PRIMARY };
      color: ${ BUTTON_COLOR_PRIMARY };

      &:hover {
        border-color: ${ BUTTON_BG_PRIMARY };
        opacity: 0.7;
        text-decoration: none !important;
      }
    }

    &--small {
      border: none;
      height: 28px;
      padding: 0.375rem 1.5rem;

      &:hover {
        opacity: 0.7;
        text-decoration: underline;
      }
    }
  }
`;

interface Props {
  onClick: () => void;
  primary?: boolean;
  small?: boolean;
}

const Button: React.FC<PropsWithChildren<Props>> = ({ children, onClick, primary = false, small = false }) => (
  <button
    css={ buttonStyles }
    className={ `Button${ primary ? ' Button--primary' : ''}${ small ? ' Button--small' : ''}`}
    onClick={ onClick }
  >
    { children }
  </button>
);

export default Button;
