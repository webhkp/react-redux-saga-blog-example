import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleSingleSmall extends Component{
  render() {
    return (
      <div className='col-md-12'>
        <Link to={`/${this.props.slug}`}>
          <h3>{ this.props.title }</h3>
        </Link>
        <div>{this.props.excerpt}</div>
        <hr />
      </div>
    )
  }
}

export default ArticleSingleSmall;