const prisma = require("../prisma");

exports.getAllFilms = async (req, res) => {
  try {
    const films = await prisma.film.findMany({
      include: {
        genre: true,
        ratings: true,
      },
    });

    res.json({
      status: "success",
      data: films,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
