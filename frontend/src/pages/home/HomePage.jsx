import Header from '../../components/header/Header';
import SearchComponent from '../../components/search/SearchComponent';
import Footer from '../../components/footer/Footer';
import './HomePage.scss';

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
              <div className='content__button'></div>
              <hr />
            </div>
          </div>
          <div className='content__img'>
            <img src='' alt='' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
