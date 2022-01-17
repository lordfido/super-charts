import { useEffect, useState } from "react"
import apiClient from "../apiClient";
import { Granularity, PullRequestMetric } from "../apiClient/types";
import { createMetricsFromServer, createPullRequestParamsToServer } from "../modelCreators";
import { LoadingState, PullRequestMetrics, PullRequestMetricsFilters } from "../types";

interface Params {
  dateRange: [Date, Date];
  metric?: PullRequestMetric;
}

/**
 * Fetch pull request metrics each time any filter
 * is changed/updated
 */
export const usePullRequestMetrics = ({ dateRange: [dateFrom, dateTo], metric }: Params) => {
  const [loadingAggregated, setLoadingAggregated] = useState<LoadingState>('idle');
  const [aggregatedMetrics, setAggregatedMetrics] = useState<PullRequestMetrics>();

  /**
   * Data for AreaChart
   */
  const fetchAggregatedMetrics = async (filters: PullRequestMetricsFilters) => {
    try {
      // Control the request's status
      setLoadingAggregated('loading');

      // Fetch data
      const params = createPullRequestParamsToServer(filters, [Granularity.alignedWeek], false);
      const data = await apiClient.metrics.getRepositoryPullRequestsMetrics(params);

      // Create a valid model for the UI
      const prMetrics = createMetricsFromServer(data);

      // Store it in the state, so data is reactive
      setAggregatedMetrics(prMetrics);

      // Set the request's status as successful
      setLoadingAggregated('success')
    } catch (error) {
      setLoadingAggregated('error');
      console.error(error);
    }
  }

  const [loadingGrouped, setLoadingGrouped] = useState<LoadingState>('idle');
  const [groupedMetrics, setGroupedMetrics] = useState<PullRequestMetrics>();

  /**
   * Data for BarChart
   */
  const fetchGroupedMetrics = async (filters: PullRequestMetricsFilters) => {
    try {
      // Control the request's status
      setLoadingGrouped('loading');

      // Fetch data
      const params = createPullRequestParamsToServer(filters, [Granularity.all], true);
      const data = await apiClient.metrics.getRepositoryPullRequestsMetrics(params);

      // Create a valid model for the UI
      const prMetrics = createMetricsFromServer(data);

      // Store it in the state, so data is reactive
      setGroupedMetrics(prMetrics);

      // Set the request's status as successful
      setLoadingGrouped('success')
    } catch (error) {
      setLoadingGrouped('error');
      console.error(error);
    }
  }

  useEffect(() => {
    if (dateFrom && dateTo && metric) {
      fetchAggregatedMetrics({ dateFrom, dateTo, metric })
      fetchGroupedMetrics({ dateFrom, dateTo, metric });
    }
  }, [dateFrom, dateTo, metric])

  return {
    loadingAggregated,
    aggregatedMetrics,
    loadingGrouped,
    groupedMetrics,
  }
};
