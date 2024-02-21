require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const PORT = 8000;

// connect to db
mongoose
  .connect("mongodb://127.0.0.1:27017/imdb")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

// use routes
app.use("/api", movieRoutes);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
