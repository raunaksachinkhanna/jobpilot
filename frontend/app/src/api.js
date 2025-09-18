const API_BASE = "http://localhost:8000";
async function post(path, body) {
  const res = await fetch(`${API_BASE}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return await res.json();
}
export const api = { post };
