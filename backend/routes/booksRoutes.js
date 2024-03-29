import { Book } from '../models/BookModel.js';
import express, { request, response } from 'express';
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
    return response.status(200).json({ data: books });
  } catch (error) {
    console.log(error.message);
  }
});

/*booksRouter.get('/:id/', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    response.status(200).json(book);
  } catch (error) {
    console.log(error.massege);
  }
});*/
booksRouter.get('/:category', async (request, response) => {
  try {
    const { category } = request.params;
    const books = await Book.find({ categories: { $in: [category] } });
    response.status(200).json({ data: books });
  } catch (error) {
    console.log(error.message);
  }
});

booksRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      response.status(404).json({ message: 'Book not find' });
    }
    return response.status(200).send({ message: 'Book updeteed successfully' });
  } catch (error) {
    console.log(error.message);
  }
});
booksRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      response.status(404).json({ message: 'Book not find' });
    }
    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.massege);
    response.status(500).send({ message: error.message });
  }
});

export default booksRouter;
