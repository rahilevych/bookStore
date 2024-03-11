import HomePage from './pages/home/HomePage';
import './App.css';
import './global.scss';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/catalog/CatalogPage';
import FavoritesPage from './pages/favorites/FavoritesPage';
import DetailsPage from './pages/details/DetailsPage';
import ErrorPage from './pages/error/ErrorPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/details' element={<DetailsPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
