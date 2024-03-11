import { BookmarkSimple, ShoppingCartSimple } from '@phosphor-icons/react';
import BookComponent from '../book/BookComponent';
import './CategoryBookComponent.scss';
import CartBtn from '../cart_btn/CartBtn';
import SaveBtn from '../save_btn/SaveBtn';
const CategoryBookComponent = () => {
  return (
    <div className='category-book'>
      <BookComponent />
      <div className='category-book__info'>
        <div className='category-book__price'>$30</div>
        <SaveBtn />
      </div>
      <CartBtn />
    </div>
  );
};
export default CategoryBookComponent;
