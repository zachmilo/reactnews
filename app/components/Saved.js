import React from "react";

import QueryItem from "./QueryItem";

export default class Saved extends React.Component {
    constructor() {
    super();
    this.savedData = this.savedData.bind(this);
    this.state = {
      historyLoaded:[]
    };
    this.savedData();
  }
  savedData() {
    axios.get("/gethistory")
    .then(function (response) {
      this.setState({historyLoaded:response.data});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
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
          this.state.historyLoaded.map(function(doc,index) {
            return <QueryItem key={index} buttonEvent="remove" articleId={doc.articleId} newsLink={doc.url} abstract={doc.title} snippet={doc.synopsis} articleDate={doc.date} icon="fa fa-trash-o" />
          })
        }
      </div>
    </nav>
  </div>
  );
  }
}
