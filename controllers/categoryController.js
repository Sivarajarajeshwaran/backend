const Category = require('../models/Category');

const getCategories = async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
};

const createCategory = async (req, res) => {
  const { name, icon, color, image } = req.body;
  const categoryExists = await Category.findOne({ name });

  if (categoryExists) {
    return res.status(400).json({ message: 'Category already exists' });
  }

  const category = await Category.create({ name, icon, color, image });
  res.status(201).json(category);
};

const deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    await category.deleteOne();
    res.json({ message: 'Category removed' });
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

module.exports = { getCategories, createCategory, deleteCategory };
