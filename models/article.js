let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleSchema = mongoose.Schema({
  title: String,
  date: String,
  url: String
});

let Article = mongoose.model("Article",ArticleSchema);

module.exports = Article;
