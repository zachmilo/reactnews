import express from "express";
import Article from "../models/article";

let router = express.Router();

router.get("/gethistory",function(req,res) {
  Article.gethistory()
  .then(function(results){
    res.status(200)
    .send(results);
  })
  .catch(function(error){
    res.status(500)
    .send(error)
  });
});

router.post("/savearticle",function(req,res) {
  let title = req.body.title;
  let date = req.body.date;
  let url = req.body.url;

  Article.addArticle({title: title, date: date, url:url})
  .then(function(){
    res.status(200)
    .send("OK");
  })
  .catch(function(error){
    res.status(500)
    .send(error)
  });
});















module.exports = router;
