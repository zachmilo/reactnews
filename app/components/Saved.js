import React from "react";

import QueryItem from "./QueryItem";

export default class Saved extends React.Component {
    constructor() {
    super();
    this.savedData = this.savedData.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.state = {
      historyLoaded:[]
    };
    this.savedData();
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

  savedData() {
    axios.get("/gethistory")
    .then(function (response) {
      this.setState({historyLoaded:response.data});
    }.bind(this))
    .catch(function (error) {
      return "";
    });
  }
  render() {
    return (
    <div className="columns">
      <nav className="panel column is-8 is-offset-2">
        <p className="panel-heading has-text-centered">
          {this.props.headerName}
        </p>
        <div className={this.state.historyLoaded.length > 0 ? "scrollIt": ""}>
        {
          this.state.historyLoaded.map((doc,index) => {
            return <QueryItem key={index} buttonEvent={this.removeArticle} articleId={doc.articleId} newsLink={doc.url} abstract={doc.title} snippet={doc.synopsis} articleDate={doc.date} icon="fa fa-trash-o" />
          })
        }
      </div>
    </nav>
  </div>
  );
  }
}
