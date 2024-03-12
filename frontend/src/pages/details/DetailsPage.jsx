import { FolderNotchOpen } from '@phosphor-icons/react/dist/ssr';
import BooksSlider from '../../components/books_slider/BooksSlider';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './DetailsPage.scss';
import BookComponent from '../../components/book/BookComponent';
import SaveBtn from '../../components/save_btn/SaveBtn';
import CartBtn from '../../components/cart_btn/CartBtn';

const DetailsPage = () => {
  return (
    <div className='container'>
      <main className='content details'>
        <div className='details__book'>
          <BookComponent />
          <div className='details__info'>
            <div className='details__name'>
              <p> A hipótese do Amor</p>
              <SaveBtn />
            </div>
            <div className='details__author'>Author (a): Name Author</div>
            <div className='details__about'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </div>
            <div className='details__price'>
              <p>30$</p>
              <div className='details__amount'></div>
            </div>
            <div className='details__purchase'>
              <CartBtn></CartBtn>
              <button className='details__buy'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='details__slider'>
          <div className='details__title'>
            <FolderNotchOpen size={32} />
            <h3 className='title'>View more</h3>
          </div>
          <BooksSlider />
        </div>
      </main>
    </div>
  );
};
export default DetailsPage;
