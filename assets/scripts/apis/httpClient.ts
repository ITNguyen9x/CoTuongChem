import { BASE_URL, getHeaders, TIMEOUT } from "./apiConfig";

// Wrapper fetch với timeout và xử lý lỗi cơ bản
export async function httpPost(endpoint: string, data: any, token?: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const jsonRes = await res.json();
    if (!res.ok) {
      return {
        status: 0,
        message: 'Lỗi gọi API: ' + jsonRes
      };
    }
    return {
        status: 1,
        message: jsonRes
    };
  } catch (err) {
    clearTimeout(timeout);
    console.error("Lỗi gọi API:", err);
      return {
          status: -1,
          message: "lỗi"
      };
  }
}