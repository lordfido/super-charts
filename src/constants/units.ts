import { PullRequestMetric } from "../apiClient/types";

const units: Record<PullRequestMetric, string> = {
  [PullRequestMetric.prLeadTime]: 's',
  [PullRequestMetric.prLeadCount]: ' PRs',
  [PullRequestMetric.prLeadCountQ]: ' PRs',
  [PullRequestMetric.prAllCount]: ' PRs',
  [PullRequestMetric.prCycleTime]: 's',
  [PullRequestMetric.prWipTime]: 's',
  [PullRequestMetric.prWipCount]: ' PRs',
  [PullRequestMetric.prWipCountQ]: ' PRs',
  [PullRequestMetric.prWipPendingCount]: ' PRs',
  [PullRequestMetric.prReviewTime]: 's',
  [PullRequestMetric.prReviewCount]: ' PRs',
  [PullRequestMetric.prReviewCountQ]: ' PRs',
  [PullRequestMetric.prReviewPendingCount]: ' PRs',
  [PullRequestMetric.prMergingTime]: 's',
  [PullRequestMetric.prMergingCount]: ' PRs',
  [PullRequestMetric.prMergingCountQ]: ' PRs',
  [PullRequestMetric.prMergingPendingCount]: ' PRs',
  [PullRequestMetric.prReleaseTime]: 's',
  [PullRequestMetric.prReleaseCount]: ' PRs',
  [PullRequestMetric.prReleaseCountQ]: ' PRs',
  [PullRequestMetric.prReleasePendingCount]: ' PRs',
  [PullRequestMetric.prRejected]: ' PRs',
  [PullRequestMetric.prOpened]: ' PRs',
}

export const getUnits = (metric: PullRequestMetric) => units[metric];
