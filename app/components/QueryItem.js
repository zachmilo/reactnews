import React from "react";

export default class QueryItem extends React.Component {
  constructor(){
    super();
    this.saveArticle = this.saveArticle.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.articleHandler = this.articleHandler.bind(this);
  }
  saveArticle() {
    axios.post("/savearticle", {
        title: this.props.abstract,
        snippet:this.props.snippet,
        date: this.props.articleDate,
        url: this.props.newsLink,
        articleId:this.props.articleId
      })
      .then(function(sucessful){
      })
      .catch(function(error){
      });
  }
  removeArticle() {
    axios.post("/removearticle", {
        articleId:this.props.articleId
      })
      .then(function(sucessful){
      })
      .catch(function(error){
      });
  }
  articleHandler() {
    if(this.props.buttonEvent === "save") {
      this.saveArticle();
    }
    else if(this.props.buttonEvent === "remove") {
      this.removeArticle();
    }
  }

  render() {
    return (
        <div className="column is-12">
        <article className="message">
          <div className="message-header">
            <a href={this.props.newsLink} target="_blank">{this.props.abstract}</a>
            <button onClick={this.articleHandler} id={this.props.articleId} className={this.props.icon}></button>
          </div>
          <div className="message-body">
            {this.props.snippet}
            <br/>
            <small>{this.props.articleDate}</small>
          </div>
        </article>
      </div>
    );
  }
}
