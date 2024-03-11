import './BookComponent.scss';
import cover from '../../assets/images/COVER_BOOK.png';
const BookComponent = () => {
  return (
    <div className='book'>
      <img src={cover} alt='book' />
    </div>
  );
};
export default BookComponent;
