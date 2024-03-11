import { BookmarkSimple } from '@phosphor-icons/react';
import './SaveBtn.scss';
const SaveBtn = () => {
  return (
    <button className='save-btn'>
      <BookmarkSimple size={32} />
    </button>
  );
};
export default SaveBtn;
