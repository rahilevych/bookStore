import './Header.scss';
import {
  BookOpen,
  BookmarkSimple,
  ShoppingCartSimple,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='header__logo'>
          <p>bookstore</p>
          <BookOpen size={32} />
        </div>
      </Link>
      <div className='header__nav'>
        <Link to='/favorites'>
          <button>
            <BookmarkSimple className='header__saved' size={32} />
          </button>
        </Link>

        <button>
          <ShoppingCartSimple className='header__cart' size={32} />
        </button>
      </div>
    </div>
  );
};
export default Header;
