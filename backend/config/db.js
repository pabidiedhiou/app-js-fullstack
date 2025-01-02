const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/bacass";

const connectDB = () => {
  try {
    mongoose
      .connect(url, {})
      .then((res) => console.log("On est connecté à la base de données"))
      .catch((err) => console.log(`erreur ${err}`));
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
