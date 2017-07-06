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
          <div className="card">
<header className="card-header">
  <p className="card-header-title">
    Component
  </p>
  <a className="card-header-icon">
    <span className="icon">
      <i className="fa fa-angle-down"></i>
    </span>
  </a>
</header>
<div className="card-content">
  <div className="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
    <br/>
    <small>11:09 PM - 1 Jan 2016</small>
  </div>
</div>
<footer className="card-footer">
  <a className="card-footer-item">Save</a>
  <a className="card-footer-item">Edit</a>
  <a className="card-footer-item">Delete</a>
</footer>
</div>
        </div>
    </nav>
  </div>
    );
  }
}
