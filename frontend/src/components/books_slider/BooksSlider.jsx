import CategoryBookComponent from '../categoty_book/CategoryBookComponent';
import './BooksSlider.scss';
const BooksSlider = ({ books, c }) => {
  const categoryBooks = books.filter((book) =>
    book.categories.includes(c.name)
  );
  return (
    <div className='books-slider'>
      {categoryBooks.map((book) => (
        <CategoryBookComponent key={book._id} book={book} />
      ))}
    </div>
  );
};
export default BooksSlider;
