export enum Granularity {
  all = 'all',
  alignedWeek = 'aligned week',
  alignedMonth = 'aligned month',
  alignedYear = 'aligned year',
  day = 'day',
  week = 'month',
  month = 'year',
  year = 'year',
}

export enum PullRequestMetric {
  prLeadTime = "pr-lead-time",
  prLeadCount = "pr-lead-count",
  prLeadCountQ = "pr-lead-count-q",
  prAllCount = "pr-all-count",
  prCycleTime = "pr-cycle-time",
  prWipTime = "pr-wip-time",
  prWipCount = "pr-wip-count",
  prWipCountQ = "pr-wip-count-q",
  prWipPendingCount = "pr-wip-pending-count",
  prReviewTime = "pr-review-time",
  prReviewCount = "pr-review-count",
  prReviewCountQ = "pr-review-count-q",
  prReviewPendingCount = "pr-review-pending-count",
  prMergingTime = "pr-merging-time",
  prMergingCount = "pr-merging-count",
  prMergingCountQ = "pr-merging-count-q",
  prMergingPendingCount = "pr-merging-pending-count",
  prReleaseTime = "pr-release-time",
  prReleaseCount = "pr-release-count",
  prReleaseCountQ = "pr-release-count-q",
  prReleasePendingCount = "pr-release-pending-count",
  prRejected = "pr-rejected",
  prOpened = "pr-opened",
}

export enum Repository {
  athenianApi = "github.com/athenianco/athenian-api",
  athenianWebapp = "github.com/athenianco/athenian-webapp",
  infraestructure = "github.com/athenianco/infrastructure",
  metadata = "github.com/athenianco/metadata"
}
