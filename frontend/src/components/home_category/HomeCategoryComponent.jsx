import { FolderNotchOpen } from '@phosphor-icons/react';
import BooksSlider from '../books_slider/BooksSlider';
import './HomeCategoryComponent.scss';
const HomeCategoryComponent = ({ c, books }) => {
  return (
    <div className='home__category'>
      <div className='home__title'>
        <FolderNotchOpen size={32} />
        <h3 className='title'>{c?.name}</h3>
      </div>
      <BooksSlider books={books} c={c} />
    </div>
  );
};
export default HomeCategoryComponent;
