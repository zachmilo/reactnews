import React from "react";

export default class Result extends React.Component {

  render() {
    return (
    <div className="columns">
      <nav className="panel column is-8 is-offset-2">
        <p className="panel-heading has-text-centered">
          {this.props.headerName}
        </p>
        <div className="panel-block">
        </div>
    </nav>
  </div>
    );
  }
}
