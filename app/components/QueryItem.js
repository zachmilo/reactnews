import React from "react";

export default class QueryItem extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
        <div className="column is-12">
        <article className="message">
          <div className="message-header">
            <a href={this.props.newsLink} target="_blank">{this.props.abstract}</a>
            <button onClick={this.props.buttonEvent} id={this.props.articleId} className={this.props.icon}></button>
          </div>
          <div className="message-body">
            {this.props.snippet}
            <br/>
            <small>{this.props.articleDate}</small>
          </div>
        </article>
      </div>
    );
  }
}
