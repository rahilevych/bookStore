import { Book } from '../models/BookModel.js';
import express from 'express';
const booksRouter = express.Router();

booksRouter.post('/', async (request, response) => {
  try {
    const newBook = {
      title: request.body.title,
      isbn: request.body.isbn,
      pageCount: request.body.pageCount,
      publishedDate: new Date(request.body.publishedDate.$date),
      thumbnailUrl: request.body.thumbnailUrl,
      shortDescription: request.body.shortDescription,
      longDescription: request.body.longDescription,
      status: request.body.status,
      authors: request.body.authors,
      categories: request.body.categories,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

booksRouter.get('/', async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
  }
});

booksRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);

    response.status(200).json(book);
  } catch (error) {
    console.log(error.massege);
  }
});
export default booksRouter;
