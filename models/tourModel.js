const mongoose = require('mongoose');

const badro = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  maxGroupSize: { type: Number, required: true },
  difficulty: { type: String, required: true },
  rantingAverage: { type: Number, default: 4 },
  rantingQuantity: { type: Number, default: 0 },
  priceDiscount: { type: Number },
  summary: { type: String, trim: true, required: true },
  description: { type: String, trim: true },
  imageCover: { type: String, required: true },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', badro);

module.exports = Tour;
