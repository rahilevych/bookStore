import { logo } from './imports';
import './Header.scss';
import { BookmarkSimple, ShoppingCartSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
      </div>
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
