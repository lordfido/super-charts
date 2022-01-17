import { http } from "./axiosInstance";
import { PULL_REQUESTS } from "./constants/endpoints";
import { PullRequestMetricsParams, PullRequestMetricsResponse } from "./types";

const getRepositoryPullRequestsMetrics = async (params: PullRequestMetricsParams) => {
  const response = await http[PULL_REQUESTS.method]<PullRequestMetricsResponse>(PULL_REQUESTS.path, params);
  return response.data;
}

/**
 * A set of tools to communicate with Athenian API
 */
const apiClient = {
  /**
   * Any request related to metrics
   */
  metrics: {
    /**
     * Get pull request metrics
     */
    getRepositoryPullRequestsMetrics,
  }
}

export default apiClient;
