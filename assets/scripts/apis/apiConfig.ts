export const BASE_URL = 'http://34.30.71.9:1000';

export const TIMEOUT = 10000;  // 10 giây timeout request

export const getHeaders = (token?: string) => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});