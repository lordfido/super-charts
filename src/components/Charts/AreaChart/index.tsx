import { css } from '@emotion/react';
import React, { useRef } from 'react';
import {
  Area,
  AreaChart as D3AreaChart,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { PullRequestMetric } from '../../../apiClient/types';
import { getUnits } from '../../../constants/units';
import { useResize } from '../../../hooks';
import {
  BARCHART_AXIS_COLOR,
  LINECHART_GRID_COLOR,
  LINECHART_LINE_COLOR,
  LINECHART_REFERENCELINE_COLOR
} from '../../../styles';
import { PullRequestMetrics } from '../../../types';
import { getLargestAvailableTimeUnit } from '../../../utils/dates';
import { toDecimals } from '../../../utils/formatters';
import { getEnumLabelFromValue } from '../../../utils/objects';
import Grid from '../../Grid';
import Kpi from '../../Kpi';
import { formatTick, formatTooltip } from '../utils';

const lineChartStyle = () => css`
  &.AreaChart {
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
  }
`;

interface Props {
  data?: PullRequestMetrics;
  metric: PullRequestMetric;
}

const AreaChart: React.FC<Props> = ({ data, metric }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(parentRef);
  const metricName = getEnumLabelFromValue(metric);
  const units = getUnits(metric);

  const dataPoints = (data?.[0].values ?? [])?.map(point => {
    const value = point?.values?.[0];
    return {
      [metric]: value ? parseInt(value, 10) : 0,
    };
  });

  const averageValue = dataPoints.reduce(
    (avg, point) => avg + (point[metric] as number),
    0
  ) / dataPoints.length;

  const avgKpi = units === 's'
    ? getLargestAvailableTimeUnit(averageValue)
    : `${ toDecimals(averageValue, 2, 0) }${ units }`;

  const maxValue = dataPoints.reduce(
    (max, point) => (point[metric] as number) > max ? point[metric] as number : max,
    0
  );

  const maxKpi = units === 's'
    ? getLargestAvailableTimeUnit(maxValue)
    : `${ toDecimals(maxValue, 2, 0) }${ units }`;
  

  return (
    <div css={ lineChartStyle } className="AreaChart" ref={ parentRef }>
      <Grid columns={2}>
        <Kpi label={`Average ${ metricName }`} value={ avgKpi } />
        <Kpi label={`Maximum ${ metricName }`} value={ maxKpi } />
      </Grid>

      <D3AreaChart
        data={ dataPoints }
        height={ rect?.height ?? 300}
        width={ rect?.width ?? 400 }
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ LINECHART_LINE_COLOR } stopOpacity={ 0.2 }/>
            <stop offset="100%" stopColor={ LINECHART_LINE_COLOR } stopOpacity={ 0.2 }/>
          </linearGradient>
        </defs>

        <CartesianGrid stroke={ LINECHART_GRID_COLOR } />

        <XAxis dataKey="name" tickCount={ 5 } tickLine={ false } />

        <YAxis
          tickCount={ 4 }
          tickFormatter={ (v) => formatTick(v, units) }
          tickLine={ false }
        />

        <Tooltip formatter={ formatTooltip } />

        <ReferenceLine
          stroke={ LINECHART_REFERENCELINE_COLOR }
          strokeDasharray="6 2"
          strokeWidth={ 2 }
          y={ averageValue }
        />

        <Area
          dataKey={ metric }
          dot={ { stroke: 'red', strokeWidth: 2 } }
          fill="url(#lineGradient)"
          fillOpacity={ 1 }
          name={ metricName }
          stroke={ LINECHART_LINE_COLOR }
          type="monotone"
          unit={ units }
        />
      </D3AreaChart>
    </div>
  )
};

export default AreaChart;
