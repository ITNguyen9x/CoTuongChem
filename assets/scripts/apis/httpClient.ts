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
      // Lấy thông báo lỗi từ server nếu có, hoặc lấy status text
      const errorMsg = jsonRes?.message || res.statusText || 'Lỗi không xác định';
      console.error(`API lỗi [${res.status}]:`, errorMsg);
      return {
        status: 0,
        message: errorMsg,
      };
    }

    // Thành công
    return {
      status: 1,
      message: jsonRes,
    };
  } catch (err: any) {
    clearTimeout(timeout);
    if (err.name === 'AbortError') {
      console.error("Lỗi: Request bị timeout");
      return {
        status: -1,
        message: "Request bị timeout",
      };
    }
    console.error("Lỗi gọi API:", err.message || err);
    return {
      status: -1,
      message: "Lỗi gọi API",
    };
  }
}