import { MagnifyingGlass } from '@phosphor-icons/react';
import './SearchComponent.scss';
const SearchComponent = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Type the name of book or author...' />
      <button>
        <MagnifyingGlass className='search__icon' size={32} />
      </button>
    </div>
  );
};
export default SearchComponent;
