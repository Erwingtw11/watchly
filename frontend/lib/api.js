export const API_BASE_URL = "http://localhost:3001/api";

export async function fetchGenres() {
  const res = await fetch(`${API_BASE_URL}/genre`, {
    cache: "no-store",
  });
  return res.json();
}
