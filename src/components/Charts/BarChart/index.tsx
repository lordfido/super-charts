import { css } from '@emotion/react';
import React, { useRef } from 'react';
import {
  Bar,
  BarChart as D3BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { PullRequestMetric } from '../../../apiClient/types';
import { getUnits } from '../../../constants/units';
import { useResize } from '../../../hooks';
import {
  BARCHART_AXIS_COLOR,
  BARCHART_BAR_BG,
  BARCHART_GRID_COLOR
} from '../../../styles';
import { PullRequestMetrics } from '../../../types';
import { getLargestAvailableTimeUnit } from '../../../utils/dates';
import { toDecimals } from '../../../utils/formatters';
import { getEnumLabelFromValue } from '../../../utils/objects';
import { curateRepositoryName } from '../../../utils/repoNames';
import Grid from '../../Grid';
import Kpi from '../../Kpi';
import { formatTick, formatTooltip } from '../utils';

const barChartStyle = () => css`
  &.BarChart {
    height: 100%;
    width: 100%;

    .recharts-wrapper {
      padding-top: 20px;
    }

    .recharts-rectangle.recharts-tooltip-cursor {
      display: none !important;
    }

    .recharts-cartesian-axis-tick-value tspan {
      color: ${ BARCHART_AXIS_COLOR };
      display: block;
      font-size: 1rem;
      max-width: 45px !important;
      width: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

interface Props {
  data?: PullRequestMetrics;
  metric: PullRequestMetric;
}

const BarChart: React.FC<Props> = ({ data, metric }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(parentRef);
  const metricName = getEnumLabelFromValue(metric);
  const units = getUnits(metric);

  const dataBars = (data ?? [])?.map(bar => ({
    name: curateRepositoryName(bar.for.repositories[0]),
    [metric]: parseInt(bar.values?.[0]?.values?.[0], 10),
  }));

  const averageValue = dataBars.reduce(
    (avg, point) => avg + (point[metric] as number),
    0
  ) / dataBars.length;

  const avgKpi = units === 's'
    ? getLargestAvailableTimeUnit(averageValue)
    : `${ toDecimals(averageValue, 2, 0) }${ units }`;

  const maxValue = dataBars.reduce(
    (max, point) => (point[metric] as number) > max ? point[metric] as number : max,
    0
  );

  const maxKpi = units === 's'
    ? getLargestAvailableTimeUnit(maxValue)
    : `${ toDecimals(maxValue, 2, 0) }${ units }`;

  return (
    <div css={ barChartStyle } className="BarChart" ref={ parentRef }>
      <Grid columns={2}>
        <Kpi label={`Average ${ metricName }`} value={ avgKpi } />
        <Kpi label={`Maximum ${ metricName }`} value={ maxKpi } />
      </Grid>

      <D3BarChart
        data={ dataBars }
        height={ rect?.height ?? 300 }
        width={ rect?.width ?? 400 }
      >
        <CartesianGrid vertical={ false } stroke={ BARCHART_GRID_COLOR } />

        <XAxis dataKey="name" tickLine={ false } />

        <YAxis
          tickCount={ 9 }
          tickFormatter={ (v) => formatTick(v, units) }
          tickLine={ false }
        />

        <Tooltip formatter={ formatTooltip } />

        <Bar
          dataKey={ metric }
          fill={ BARCHART_BAR_BG }
          name={ metricName }
          maxBarSize={ 50 }
          unit={ units }
        />
      </D3BarChart>
    </div>
  )
};

export default BarChart;
