export const API_BASE_URL = "http://localhost:3001";

export async function fetchGenres() {
  const res = await fetch(`${API_BASE_URL}/api/genres`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json();
}
