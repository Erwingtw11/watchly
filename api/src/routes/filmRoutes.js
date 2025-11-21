const express = require("express");
const router = express.Router();
// Tambahkan controller yang dibutuhkan: getRecommendedFilms dan getFilmById
const { 
    getAllFilms, 
    getRecommendedFilms, 
    getFilmById 
} = require("../controllers/filmController");

// Catatan: Urutan pendaftaran route SANGAT PENTING

// 1. GET /films/recommend (Route Spesifik)
// Ini harus diletakkan sebelum route dinamis (/films/:id) agar tidak dianggap sebagai ID.
router.get("/recommend", getRecommendedFilms);

// 2. GET /films/:id (Route Dinamis - Disiapkan untuk film berdasarkan ID)
// Jika Anda memiliki route ini di masa depan, letakkan di sini.
// router.get("/:id", getFilmById); 

// 3. GET /films (Route List Utama)
router.get("/", getAllFilms);

module.exports = router;