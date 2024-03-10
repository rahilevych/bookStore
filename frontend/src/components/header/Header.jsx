import { logo } from './imports';
import './Header.scss';
import { BookmarkSimple, ShoppingCartSimple } from '@phosphor-icons/react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='header__nav'>
        <BookmarkSimple className='header__saved' size={32} />
        <ShoppingCartSimple className='header__cart' size={32} />
      </div>
    </div>
  );
};
export default Header;
