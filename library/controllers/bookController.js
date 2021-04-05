const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  const Books = await Book.find();
  res.status(200).json({ Books });
};

const getBook = async (req, res) => {
  const id = req.params.id;
  const Book = await Book.findById(id);
  res.status(200).json({ Book });
};

const addBook = async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const publishedYear = req.body.publishedYear;

  const Book = await Book.create({ title, author, publishedYear });
  res.status(201).json({ Book });
};

const updateBooks = async (req, res) => {
  const id = req.params.id;
  const Book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ Book });
};

const deleteBooks = async (req, res) => {
  const id = req.params.id;
  await Book.findByIdAndDelete(id);
  res.status(204).send("Delete Book");
};

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBooks,
  deleteBooks,
};
