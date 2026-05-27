const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
  color: { type: String, default: '#f1f5f9' },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
