let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleSchema = mongoose.Schema({
  title: String,
  synopsis: String,
  date: String,
  url: String
});

let Article = mongoose.model("Article",ArticleSchema);

ArticleSchema.statics.gethistory = function(){
  return this.find();
}

ArticleSchema.statics.addArticle = function(article){
  return this.create(article);
}

module.exports = Article;
