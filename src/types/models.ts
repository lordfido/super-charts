import { PullRequestCalculated, PullRequestMetric } from "../apiClient/types";

export interface PullRequestMetricsFilters {
  dateFrom: Date;
  dateTo: Date;
  metric: PullRequestMetric;
  groupByRepository?: boolean;
}

export type PullRequestMetrics  = PullRequestCalculated[];
