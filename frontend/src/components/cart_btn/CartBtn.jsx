import { ShoppingCartSimple } from '@phosphor-icons/react';
import './CartBtn.scss';
const CartBtn = () => {
  return (
    <button className='cart-btn'>
      <ShoppingCartSimple size={24} />
    </button>
  );
};
export default CartBtn;
