import './CategoryButtonComponent.scss';
const CategoryButtonComponent = ({ cat }) => {
  return <button className='category-btn'>{cat.name}</button>;
};
export default CategoryButtonComponent;
