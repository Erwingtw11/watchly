const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const filmRoutes = require("./routes/filmRoutes");
const genreRoutes = require("./routes/genreRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/films", filmRoutes);
app.use("/genres", genreRoutes);
app.use("/users", userRoutes);

// Server listen
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
