import Header from '../../components/header/Header';
import SearchComponent from '../../components/search/SearchComponent';
import Footer from '../../components/footer/Footer';
import './HomePage.scss';
import { img } from './importsHome.js';
import { Binoculars } from '@phosphor-icons/react';
import BookComponent from '../../components/book/BookComponent.jsx';

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
              <button className='content__button'>
                Explore
                <Binoculars className='content__icon' size={32} />
              </button>
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
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
