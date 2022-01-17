import { Endpoint } from "../types";

export const BASE_URL = 'https://api.athenian.co/v1'

const METRICS = '/metrics'

export const PULL_REQUESTS: Endpoint = {
  method: 'post',
  path: `${ METRICS }/pull_requests`,
}