import SearchBlockComponent from '../../components/search-block/SearchBlockComponent';
import BooksSlider from '../../components/books_slider/BooksSlider';
import './CatalogPage.scss';

const CatalogPage = () => {
  return (
    <div className='container'>
      <main className='content'>
        <SearchBlockComponent />
        <BooksSlider />
      </main>
    </div>
  );
};
export default CatalogPage;
