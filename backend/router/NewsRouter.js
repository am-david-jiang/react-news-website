const express = require("express");
const {
  getArticlesList,
  getSpecifiedArticle,
  createArticle,
  getSimpleArticleList,
  deleteArticle,
  updateArticle,
  getArticleContent,
} = require("../controllers/NewsController");

const router = express.Router();

router.get("/articles/list", getSimpleArticleList);
router.get("/articles/:id", getSpecifiedArticle);
router.get("/articles", getArticlesList);
router.get("/articles/content/:id", getArticleContent);
router.post("/articles", createArticle);
router.delete("/articles/:id", deleteArticle);
router.put("/articles/:id", updateArticle);

module.exports = router;
