const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI'); //get from default.json using config

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
