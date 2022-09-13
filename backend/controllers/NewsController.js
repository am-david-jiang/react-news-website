const mongoose = require("mongoose");
const News = require("../models/News");
const ObjectId = require("mongoose").Types.ObjectId;
const NewsModel = require("../models/News");

const getArticlesCount = (req, res) => {
  try {
    NewsModel.find({}).count((err, count) => {
      if (err) throw new Error(err);

      res.status(200).json({ count });
    });
  } catch (err) {
    console.log(err);
  }
};

const getSimpleArticleList = (req, res) => {
  try {
    NewsModel.find({}, "_id author title description urlToImage publishedAt")
      .lean()
      .exec((err, articles) => {
        if (err) throw new Error(err);

        res.status(200).json(articles);
      });
  } catch (err) {
    console.log(err);
  }
};

const getArticlesList = (req, res) => {
  try {
    NewsModel.find({})
      .lean()
      .exec((err, articles) => {
        if (err) throw new Error(err);

        res.json(articles);
      });
  } catch (err) {
    console.log(err);
  }
};

const getSpecifiedArticle = (req, res) => {
  const objectId = req.params.id;

  if (!ObjectId.isValid(objectId))
    res.status(404).json({ msg: "Not a valid ObjectId" });

  try {
    NewsModel.findOne({ _id: ObjectId(objectId) })
      .lean()
      .exec((err, article) => {
        if (err) throw new Error(err);

        res.json(article);
      });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

const createArticle = (req, res) => {
  try {
    const content = req.body;
    const newArticle = new NewsModel(content);
    newArticle.save((err) => {
      if (err) throw new Error(err);

      res.status(200).json({ msg: "New Article Created" });
    });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

const updateArticle = (req, res) => {
  const objectId = req.params.id;
  const modifiedPart = req.body;

  if (!ObjectId.isValid(objectId))
    res.status(404).json({ msg: "Not a valid ObjectId" });

  try {
    NewsModel.updateOne({ _id: objectId }, modifiedPart, (err, result) => {
      if (err) throw new Error(err);

      res.status(200).json({ result });
    });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

const deleteArticle = (req, res) => {
  const objectId = req.params.id;

  if (!ObjectId.isValid(objectId))
    res.status(404).json({ msg: "Not a valid ObjectId" });

  try {
    NewsModel.deleteOne({ _id: objectId }, (err) => {
      if (err) throw new Error(err);

      res.status(200);
    });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

const getArticleContent = (req, res) => {
  const objectId = req.params.id;

  if (!ObjectId.isValid(objectId))
    res.status(404).json({ msg: "Not a valid ObjectId" });

  try {
    NewsModel.findOne({ _id: objectId }, "content")
      .lean()
      .exec((err, content) => {
        if (err) throw new Error(err);

        res.status(200).json(content);
      });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

module.exports = {
  getArticlesList,
  getSpecifiedArticle,
  createArticle,
  getSimpleArticleList,
  deleteArticle,
  updateArticle,
  getArticleContent,
};
