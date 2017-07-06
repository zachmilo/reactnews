import React from "react";

export default class SearchList extends React.Component {

  render() {
    return (
    <div className="columns">
      <nav className="panel column is-8 is-offset-2">
        <p className="panel-heading has-text-centered">
          {this.props.headerName}
        </p>
        <div className="panel-block">
            <input className="input is-small" type="text" placeholder="Topic" />
        </div>
        <div className="panel-block">
          <input className="input is-small" type="text" placeholder="Start Year" />
        </div>
        <div className="panel-block">
        <input className="input is-small" type="text" placeholder="End Year" />
      </div>
      <div className="panel-block">
      <a className="button is-success is-hovered">Search</a>
    </div>
    </nav>
  </div>
    );
  }
}
