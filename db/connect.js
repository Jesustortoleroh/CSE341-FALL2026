const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB is connected');
  } catch (error) {
    console.error('MongoDB is not connected:', error);
    process.exit(1);
  }
};

module.exports = connectDB;