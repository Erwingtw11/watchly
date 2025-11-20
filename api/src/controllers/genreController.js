const prisma = require("../prisma");

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany({
      include: {
        films: true,
      },
    });

    res.json({
      status: "success",
      data: genres,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
