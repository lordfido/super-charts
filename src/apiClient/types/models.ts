import { Granularity, PullRequestMetric, Repository } from './parameters';

export interface PullRequestMetricsParams {
  for: {
    repositories: Repository[];
    repogroups?: number[][];
    with?: {
      author: string[];
    };
  }[];
  metrics: PullRequestMetric[];
  granularities: Granularity[];
  account: number;
  
  date_from: string;
  date_to: string;

  timezone?: number;
  exclude_inactive?: boolean;
}

interface PullRequestMetricValue {
  date: string;
  values: string[];
  confidence_scores: number[];
  confidence_mins: string[];
  confidence_maxs: string[];
}

export interface PullRequestCalculated {
  for: {
    repositories: string[];
  },
  granularity: Granularity,
  values: PullRequestMetricValue[];
}

export interface PullRequestMetricsResponse {
  calculated: PullRequestCalculated[];
  metrics: PullRequestMetric[];
  date_from: string;
  date_to: string;
  timezone: number;
  granularities: Granularity[];
  exclude_inactive: boolean;
}