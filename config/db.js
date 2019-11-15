// importing mongoose
const mongoose = require("mongoose");
// importing config file
const config = require("config");
// getting the dbURI from config file
const db = config.get("mongoURI");

// using async await to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("mongoDb connected");
  } catch (error) {
    console.error(error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
