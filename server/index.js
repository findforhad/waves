const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/waves", { useNewUrlParser: true })
  .then(() => console.log("MongoDB is running..."))
  .catch(err => console.log(err));

app.listen(2000, () => {
  console.log("Server connected");
});
