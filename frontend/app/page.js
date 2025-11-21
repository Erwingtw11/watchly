import { fetchGenres } from "@/lib/api";

export default async function GenrePage() {
  const genres = await fetchGenres();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Genre</h1>

      <ul className="space-y-2">
        {genres.data.map((g) => (
          <li key={g.id} className="border p-3 rounded shadow-sm bg-white">
            {g.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
