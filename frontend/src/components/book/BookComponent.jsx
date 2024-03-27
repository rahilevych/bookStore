import './BookComponent.scss';
import { Link } from 'react-router-dom';
const BookComponent = ({ book }) => {
  return (
    <Link to='/details'>
      <div className='book'>
        <img src={book?.thumbnailUrl} alt='' />
      </div>
    </Link>
  );
};
export default BookComponent;
