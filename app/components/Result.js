import React from "react";

import QueryItem from "./QueryItem";
import Saved from "./Saved";

export default class Result extends React.Component {
  constructor(props){
    super(props);
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
          this.props.resultsFound.map(function(doc,index) {
            let header = doc.abstract;
            let formDate = doc.pub_date.split("T")[0];
            return <QueryItem key={index} buttonEvent="save" articleId={doc._id} newsLink={doc.web_url} abstract={doc.headline.main} snippet={doc.snippet} articleDate={formDate} icon="fa fa-floppy-o" />
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
