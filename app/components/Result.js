import React from "react";

import QueryItem from "./QueryItem";
import Saved from "./Saved";

export default class Result extends React.Component {
  constructor(props){
    super(props);
    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle() {
    axios.post("/savearticle", {
        title: this.props.abstract,
        snippet:this.props.snippet,
        date: this.props.articleDate,
        url: this.props.newsLink,
        articleId:this.props.articleId
      })
      .then(function(sucessful) {

      })
      .catch(function(error){
      });
  }

  render() {
    return (
    <div>
    <div className="columns">
    <div className="column">
      <nav className="panel column is-8 is-offset-2">
        <p className="panel-heading has-text-centered">
          {this.props.headerName}
        </p>
        <div className={this.props.resultsFound.length > 0 ? "scrollIt": ""}>
        {
          this.props.resultsFound.map((doc,index) => {
            let header = doc.abstract;
            let formDate = doc.pub_date.split("T")[0];
            return <QueryItem key={index} buttonEvent={this.saveArticle} articleId={doc._id} newsLink={doc.web_url} abstract={doc.headline.main} snippet={doc.snippet} articleDate={formDate} icon="fa fa-floppy-o" />
          })
        }
      </div>
    </nav>
  </div>
  </div>
  <Saved headerName="Saved" />
</div>
    );
  }
}
