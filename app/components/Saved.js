import React from "react";

export default class Saved extends React.Component {
  constructor() {
    super();
    this.savedData = this.savedData.bind(this);
  }
  savedData() {
    axios.get("/gethistory")
    .then(function (response) {
      console.log(response);
      let historySave = response.map(function(result){
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {result.title}
            </p>
            <a className="card-header-icon">
              <span className="icon">
                <i className="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              {result.synopsis}
              <br/>
              <small>{result.date}</small>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item">Save</a>
          </footer>
        </div>
      })
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
        </div>
    </nav>
  </div>
    );
  }
}
