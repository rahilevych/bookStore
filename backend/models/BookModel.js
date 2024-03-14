import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: Date,
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String],
});
export const Book = mongoose.model('Book', bookSchema);
