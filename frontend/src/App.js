import HomePage from './pages/home/HomePage';
import './App.css';
import '../../frontend/src/assets/styles/global.scss';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/catalog/CatalogPage';
import FavoritesPage from './pages/favorites/FavoritesPage';
import DetailsPage from './pages/details/DetailsPage';
import ErrorPage from './pages/error/ErrorPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollTop from './help-components/ScrollTop';

function App() {
  return (
    <div className='container'>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/details' element={<DetailsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
