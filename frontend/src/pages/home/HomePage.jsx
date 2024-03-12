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
import BooksSlider from '../../components/books_slider/BooksSlider.jsx';

const HomePage = () => {
  return (
    <div className='container'>
      <main className='content home'>
        <div className='home__header'>
          <div className='home__search'>
            <h1>What book are you looking for?</h1>
            <p>Explore our catalog and find your next read.</p>
            <SearchComponent />
            <div className='home__explore'>
              <Link to='/catalog'>
                <button className='home__button'>
                  Explore
                  <Binoculars className='home__icon' size={32} />
                </button>
              </Link>

              <hr />
            </div>
          </div>
          <div className='home__img'>
            <img src={img} alt='' />
          </div>
        </div>
        <div className='home__trending'>
          <div className='home__text'>
            <h3 className='title'>Trending Books</h3>
            <p>Drag to explore</p>
          </div>
          <div className='home__slider'>
            <BookComponent />
            <BookComponent />
            <BookComponent />
            <BookComponent />
            <BookComponent />
          </div>
        </div>
        <div className='home__categories'>
          <div className='home__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Categories</h3>
          </div>
          <div className='home__list'>
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
            <CategoryButtonComponent />
          </div>
        </div>
        <div className='home__category'>
          <div className='home__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Romance</h3>
          </div>
          <BooksSlider />
        </div>
        <div className='home__category'>
          <div className='home__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Adventure</h3>
          </div>
          <BooksSlider />
        </div>
      </main>
    </div>
  );
};
export default HomePage;
