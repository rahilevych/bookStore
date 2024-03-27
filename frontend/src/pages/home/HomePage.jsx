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
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeCategoryComponent from '../../components/home_category/HomeCategoryComponent.jsx';
const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksResponse, categoriesResponse] = await Promise.all([
          axios.get('http://localhost:5000/books'),
          await axios.get('http://localhost:5000/categories'),
        ]);
        setBooks(booksResponse.data.data);
        setCategories(categoriesResponse.data.data);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchData();
  }, []);
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
            {books &&
              books.map((book) => <BookComponent key={book._id} book={book} />)}
          </div>
        </div>
        <div className='home__categories'>
          <div className='home__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>Categories</h3>
          </div>
          <div className='home__list'>
            {categories.map((cat) => (
              <CategoryButtonComponent key={cat._id} cat={cat} />
            ))}
          </div>
        </div>
        {categories.map((c) => (
          <HomeCategoryComponent key={c._id} c={c} books={books} />
        ))}
      </main>
    </div>
  );
};
export default HomePage;
