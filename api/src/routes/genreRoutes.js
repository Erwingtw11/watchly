const express = require("express");
const router = express.Router();

const { getAllGenres, createGenre } = require("../controllers/genreController");

router.get("/", getAllGenres);
router.post("/", createGenre);

module.exports = router;
