import "dotenv/config";
// Hapus import defineConfig

// Eksport objek konfigurasi secara langsung
export default {
  // Properti schema dan migrations wajib ada
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  
  // Gunakan properti 'db' untuk URL koneksi migrasi (Prisma 7+ style)
  db: {
    url: process.env.DATABASE_URL, 
  }
};