const mongoose = require('mongoose');

const EssenceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true
  },
  group: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: String,
  latin: {
    type: String,
    trim: true
  },
  description: Array,
  indications: Array,
  effects: Array,
  chakras: Array,
  chakrasSecondary: Array,
  meridians: Array,
  meridiansSecondary: Array,
  keywords: Array,
  stock: Boolean
})

module.exports = mongoose.model('Essence', EssenceSchema);