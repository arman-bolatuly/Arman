const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// find all books
router.get("/books", async (req, res, next) => {
  try {
    //const { authorId } = req.params;
    const books = await prisma.books.findMany({
      //where: { published: true },
      include: { author: true },
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
});

// delete book by id
router.delete("/books/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await prisma.books.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletedBook);
  } catch (error) {
    next(error);
  }
});

// add book
router.post("/books", async (req, res, next) => {
  try {
    const { name, year_of_release, authorId } = req.body;
    const books = await prisma.books.create({
      data: {
        name: name,
        year_of_release: year_of_release,
        authorId: authorId,
      },
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
});

// update book by id
router.patch("/books/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await prisma.books.update({
      where: {
        id: Number(id),
      },
      data: {
        name: req.body.name,
        year_of_release: req.body.year_of_release,
        authorId: req.body.authorId,
      },
    });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

// find book by id
router.get("/books/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const books = await prisma.books.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
