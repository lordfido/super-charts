import { css } from "@emotion/react";
import { INPUT_BG, INPUT_BORDER } from "../../styles";

export const formField = () => css`
  align-items: center;
  background-color: ${ INPUT_BG };
  border: 1px solid ${ INPUT_BORDER };
  border-radius: 0.4rem;
  color: inherit;
  display: inline-flex;
  font-size: 12px;

  & > svg {
    display: inline-block;
    fill: currentColor;
    margin: 10px;
    width: 16px;
  }
`;
