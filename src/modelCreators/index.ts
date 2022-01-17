import { Granularity, PullRequestMetricsParams, PullRequestMetricsResponse, Repository } from "../apiClient/types";
import { PullRequestMetrics, PullRequestMetricsFilters } from '../types';

/**
 * Create a relevant model for the frontend, based on
 * backend's response
 */
export const createMetricsFromServer = ({ calculated }: PullRequestMetricsResponse): PullRequestMetrics =>
  calculated;

/**
 * Transform frontend dates into a format that
 * Athenian's backend can understand
 */
 export const createDateToServer = (date: Date): string => {
  const yyyy = date.getFullYear().toString().padStart(4, '0');
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');

  return `${ yyyy }-${ MM }-${ dd }`;
}

/**
 * Transform frontend models into a model that
 * Athenian's backend can understand
 */
export const createPullRequestParamsToServer = (
  {
    dateFrom,
    dateTo,
    metric
  }: PullRequestMetricsFilters, 
  granularities: Granularity[],
  groupByRepository = false,
): PullRequestMetricsParams => ({
  for: [
    {
      repositories: [
        Repository.athenianApi,
        Repository.metadata,
        Repository.infraestructure,
        Repository.athenianWebapp,
      ],
      repogroups: groupByRepository ? [[0], [1], [2], [3]] : undefined
    }
  ],
  metrics: [metric],
  granularities,
  account: 1,
  exclude_inactive: true,
  timezone: 60,
  date_from: createDateToServer(dateFrom),
  date_to: createDateToServer(dateTo)
});
