import React, { Component } from 'react';
import {connect} from 'react-redux';

class ArticleSingleSmall extends Component{
  render() {
    return (
      <div className='home'>
        <h3>{ this.props.title }</h3>
        <div>{this.props.excerpt}</div>
        <hr />
      </div>
    )
  }
}

export default ArticleSingleSmall;