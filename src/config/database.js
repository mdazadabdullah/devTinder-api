const mongoose = require("mongoose");
// const uri = "mongodb+srv://namastedev:namastedev1234@cluster0.bobhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:namastedev@cluster0.bobhi.mongodb.net/devTinder"

  );
};
module.exports = connectDB;