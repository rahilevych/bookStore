import CategoryBookComponent from '../categoty_book/CategoryBookComponent';
import './BooksSlider.scss';
const BooksSlider = () => {
  return (
    <div className='books-slider'>
      <CategoryBookComponent />
      <CategoryBookComponent />
      <CategoryBookComponent />
      <CategoryBookComponent />
      <CategoryBookComponent />
    </div>
  );
};
export default BooksSlider;
