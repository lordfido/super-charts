import React from 'react';
import { PullRequestMetric } from '../../../../apiClient/types';
import Card from '../../../../components/Card';
import { BarChart, AreaChart } from '../../../../components/Charts';
import Grid from '../../../../components/Grid';
import LoadingIdicator from '../../../../components/LoadingIndicator';
import { LoadingState, PullRequestMetrics } from '../../../../types';

interface Props {
  aggregatedMetrics?: PullRequestMetrics
  groupedMetrics?: PullRequestMetrics
  loadingAggregated: LoadingState;
  loadingGrouped: LoadingState;
  metric: PullRequestMetric;
}

const MetricCharts: React.FC<Props> = ({ aggregatedMetrics, groupedMetrics, loadingAggregated, loadingGrouped, metric }) => (
  <Grid columns={ 2 }>
    <Card>
      { loadingAggregated === 'loading' && (
        <LoadingIdicator />
      ) }

      { loadingAggregated === 'success' && (
        <AreaChart data={ aggregatedMetrics } metric={ metric } />
      ) }
    </Card>

    <Card>
      { loadingGrouped === 'loading' && (
        <LoadingIdicator />
      ) }

      { loadingGrouped === 'success' && (
        <BarChart data={ groupedMetrics } metric={ metric } />
      ) }
    </Card>
  </Grid>
);

export default MetricCharts;
