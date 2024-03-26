import express, { response } from 'express';
import { Category } from '../models/CategoryModel.js';
const categoriesRouter = express.Router();

categoriesRouter.post('/', async (request, response) => {
  try {
    const newCategory = {
      name: request.body.name,
    };
    const category = await Category.create(newCategory);
    return response.status(201).send(category);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
categoriesRouter.get('/', async (request, response) => {
  try {
    const categories = await Category.find({});
    return response.status(200).json({ data: categories });
  } catch (error) {
    response.status(404).json({ message: 'Data not found' });
  }
});
categoriesRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const category = await Category.findById(id);
    return response.status(200).json(category);
  } catch (error) {
    response.status(404).json({ message: 'Data not found' });
  }
});
categoriesRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Category.findByIdAndUpdate(id, request.body);
    if (!result) {
      response.status(404).json({ message: 'Category not found' });
    }
    return response
      .status(200)
      .send({ message: 'Category updated successfully' });
  } catch (error) {
    console.log(error.message);
  }
});
categoriesRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Category.findByIdAndDelete(id);
    if (!result) {
      response.status(404).json({ message: 'Catagory not found' });
    }
    return response
      .status(200)
      .send({ message: 'Categoty deleted successfully' });
  } catch (error) {
    console.log(error.message);
  }
});
export default categoriesRouter;
