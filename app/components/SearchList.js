import React from "react";

export default class SearchList extends React.Component {
  constructor() {
    super();
    this.searchInput = this.searchInput.bind(this);
  }
  searchInput(searchQuery) {
    axios.get("/gethistory",{
      params: {
        q: "",
        begin_date: "",
        end_date: ""
      }
    })
    .then(function (response) {
      console.log(response);
      let searchResult = response.map(function(result) {
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <a>{result.title}</a>
            </p>
            <a className="card-header-icon">
              <span className="icon">
                <i className="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              {result.abstract}
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br/>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item button is-success is-outlined">Save</a>
          </footer>
        </div>
      });
      return historySave;
    })
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
