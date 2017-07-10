import React from "react";

import api from "../../apiKey";

import Result from "./Result";

export default class SearchList extends React.Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      beginDate: "",
      endDate:"",
      queryList:[]
    }
    this.searchNyt = this.searchNyt.bind(this);
    this.changeField = this.changeField.bind(this);
  }
  searchNyt() {
    let topic = this.state.topic;
    let beginDate = this.state.beginDate;
    let endDate = this.state.endDate;
    let params = {"api-key":api, q:topic};

    if(!topic) {
      return "";
    }
    if(beginDate || endDate) {
      if(beginDate)
      {
        params.beginDate = beginDate;
      }
      if(endDate) {
        params.endDate = endDate;
      }
    }
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",{
      params: params
    })
    .then(function (response) {
      this.setState({queryList:response.data.response.docs});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      return "";
    });
  }
  changeField(event) {
    let key = event.target.id;
    this.setState({[key]: event.target.value});
  }

  render() {
    return (
      <div>
    <div className="columns">
      <nav className="panel column is-8 is-offset-2">
        <p className="panel-heading has-text-centered">
          {this.props.headerName}
        </p>
        <div className="panel-block">
            <input id="topic" className="input is-small" type="text" onChange={this.changeField} placeholder="Topic" />
        </div>
        <div className="panel-block">
          <input id="beginDate" className="input is-small" type="text" onChange={this.changeField} placeholder="Start Year" />
        </div>
        <div className="panel-block">
        <input id="endDate" className="input is-small" type="text" onChange={this.changeField} placeholder="End Year" />
      </div>
      <div className="panel-block">
      <a className="button is-success is-hovered" onClick={this.searchNyt}>Search</a>
    </div>
    </nav>
  </div>
  <Result headerName="Result" resultsFound={this.state.queryList}/>
</div>
    );
  }
}
