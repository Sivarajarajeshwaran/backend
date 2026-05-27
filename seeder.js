const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');
const Category = require('./models/Category');
const Order = require('./models/Order');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const categories = [
  { name: 'Fresh Fruits', icon: '🍎', color: '#fee2e2', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800' },
  { name: 'Vegetables', icon: '🥦', color: '#dcfce7', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c12e8c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Dairy & Eggs', icon: '🥛', color: '#dbeafe', image: 'https://images.unsplash.com/photo-1550583724-1255818c053b?auto=format&fit=crop&q=80&w=800' },
  { name: 'Bakery', icon: '🥐', color: '#fef3c7', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
];

const products = [
  {
    name: 'Organic Red Apples',
    price: 4.99,
    category: 'Fresh Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    unit: '1kg',
    description: 'Fresh and crunchy organic red apples from local orchards.'
  },
  {
    name: 'Fresh Broccoli',
    price: 2.49,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    unit: '500g',
    description: 'Fresh green broccoli heads, rich in vitamins.'
  },
  {
    name: 'Whole Milk',
    price: 3.29,
    category: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1563636619-e9107da5a19b?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    unit: '1L',
    description: 'Pure and creamy whole milk from organic farms.'
  },
  {
    name: 'Artisan Sourdough',
    price: 5.50,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    unit: '500g',
    description: 'Traditional artisan sourdough bread baked fresh daily.'
  }
];

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();

    await Category.insertMany(categories);
    await Product.insertMany(products);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();

    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destruction: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
