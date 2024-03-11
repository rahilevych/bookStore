import './BookComponent.scss';
import cover from '../../assets/images/COVER_BOOK.png';
import { Link } from 'react-router-dom';
const BookComponent = () => {
  return (
    <Link to='/details'>
      <div className='book'>
        <img src={cover} alt='book' />
      </div>
    </Link>
  );
};
export default BookComponent;
