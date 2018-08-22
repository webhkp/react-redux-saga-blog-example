import React, { Component } from 'react';
import {connect} from 'react-redux';

class ArticleSingle extends Component{
  render() {
    return (
      <div className='mainArticle'>
        <h3>{this.props.article_title}</h3>
        <div>{this.props.article_content}</div>
      </div>
    )
  }
}

export default connect(state => {
  const article = state.article || {};

  return {
    article_id: article.id || null,
    article_title: article.title || '',
    article_content: article.content || '',
    article_created_at: article.createdAt || null,
  }
})(ArticleSingle);