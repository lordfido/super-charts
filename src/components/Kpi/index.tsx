import { css } from '@emotion/react';
import React from 'react';
import { KPI_BG, KPI_COLOR, KPI_VALUE_COLOR } from '../../styles';

const kpiStyle = () => css`
  &.KPI {
    background-color: ${ KPI_BG };
    border-radius: 0.35rem;
    color: ${ KPI_COLOR };
    display: inline-flex;
    flex-direction: column;
    padding: 2rem;
    max-width: 320px;
    width: 100%;
    word-wrap: break-word;

    .KPI-label,
    .KPI-value {
      font-weight: 500;
    }

    .KPI-label {
      font-size: 1.1rem;
      line-height: 1.4rem;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
    }

    .KPI-value {
      color: ${ KPI_VALUE_COLOR };
      font-size: 2.1rem;
      letter-spacing: -0.04rem;
      line-height: 2.1rem;
    }
  }
`;

interface Props {
  label: string;
  value: string;
}

const Kpi: React.FC<Props> = ({ label, value }) => (
  <div css={ kpiStyle } className="KPI">
    <span className="KPI-label">
      { label }
    </span>

    <span className="KPI-value">
      { value }
    </span>
  </div>
);

export default Kpi;
