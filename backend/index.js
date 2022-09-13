const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const newsRouter = require("./router/NewsRouter");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", newsRouter);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connect Succeed. Now Listening");
    });
  })
  .catch((err) => console.log(err));
