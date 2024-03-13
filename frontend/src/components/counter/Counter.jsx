import './Counter.scss';
const Counter = () => {
  return (
    <div className='counter'>
      <button className=' counter__btn counter__minus'>-</button>
      <div className='counter__amount'>01</div>
      <button className='counter__btn counter__plus '>+</button>
    </div>
  );
};
export default Counter;
