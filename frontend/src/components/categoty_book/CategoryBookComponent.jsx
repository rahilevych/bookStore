import { BookmarkSimple, ShoppingCartSimple } from '@phosphor-icons/react';
import BookComponent from '../book/BookComponent';
import './CategoryBookComponent.scss';
const CategoryBookComponent = () => {
  return (
    <div className='category-book'>
      <BookComponent />
      <div className='category-book__info'>
        <div className='category-book__price'>$30</div>
        <button className='category-book__save'>
          <BookmarkSimple size={32} />
        </button>
      </div>
      <button className='category-book__buy'>
        <ShoppingCartSimple size={24} />
      </button>
    </div>
  );
};
export default CategoryBookComponent;
