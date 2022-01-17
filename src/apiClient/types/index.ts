export * from './models';
export * from './parameters';

export type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface Endpoint {
  method: Method;
  path: string;
}