import Header from '../../components/header/Header';
import SearchComponent from '../../components/search/SearchComponent';
import Footer from '../../components/footer/Footer';
import './HomePage.scss';
import { img } from './importsHome.js';
import { Binoculars, FolderNotchOpen } from '@phosphor-icons/react';
import BookComponent from '../../components/book/BookComponent.jsx';
import CategoryButtonComponent from '../../components/category_button/CategoryButtonComponent.jsx';
import CategoryBookComponent from '../../components/categoty_book/CategoryBookComponent.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <main className='content'>
        <div className='content__header'>
          <div className='content__search'>
            <h1>What book are you looking for?</h1>
            <p>Explore our catalog and find your next read.</p>
            <SearchComponent />
            <div className='content__explore'>
              <Link to='/catalog'>
                <button className='content__button'>
                  Explore
                  <Binoculars className='content__icon' size={32} />
                </button>
              </Link>

              <hr />
            </div>
          </div>
          <div className='content__img'>
            <img src={img} alt='' />
          </div>
        </div>
        <div className='content__trending'>
          <div className='content__text'>
            <h3 className='title'>Trending Books</h3>
            <p>Drag to explore</p>
          </div>
          <div className='content__slider'>
            <BookComponent />
            <BookComponent />
            <BookComponent />
            <BookComponent />
            <BookComponent />
          </div>
        </div>
        <div className='content__categories'>
          <div className='content__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Categories</h3>
          </div>
          <div className='content__list-category'>
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
          </div>
        </div>
        <div className='content__category-book'>
          <div className='content__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Romance</h3>
          </div>
          <div className='content__category-slider'>
            <CategoryBookComponent />
            <CategoryBookComponent />
            <CategoryBookComponent />
            <CategoryBookComponent />
            <CategoryBookComponent />
          </div>
        </div>
        <div className='content__category-book'>
          <div className='content__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Adventure</h3>
          </div>
          <div className='content__category-slider'>
            <CategoryBookComponent />
            <CategoryBookComponent />
            <CategoryBookComponent />
            <CategoryBookComponent />
            <CategoryBookComponent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
