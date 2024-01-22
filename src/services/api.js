// .env
const BASE_API_V1 = `http://localhost:3001/api/v1`;

export async function API_PUBLIC({ endpoint, method = "GET", body, jwt }) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (jwt) headers.Authorization = `BEARER ${jwt}`;
    const config = {
      method,
      headers,
    };
    if (body) {
      Object.assign(config, { body: JSON.stringify(body) });
    }
    const send = await fetch(`${BASE_API_V1}${endpoint}`, config);
    return send.json();
  } catch (e) {
    throw new Error(e);
  }
}
