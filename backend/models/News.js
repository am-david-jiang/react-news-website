const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  id: Number,
  author: String,
  title: String,
  description: String,
  urlToImage: {
    type: String,
    default: "http://via.placeholder.com/640x360",
  },
  publishedAt: {
    type: Date,
    default: Date.now(),
  },
  content: String,
});

module.exports = new mongoose.model("News", newsSchema);
