import React, { Component } from 'react';
import {connect} from 'react-redux';
import ArticleSingle from '../common/article/article-single';

class Article extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ARTICLE_SINGLE',
      slug: this.props.match.params.slug
    });
  }
  render() {
    return (
      <div className='article'>
        <ArticleSingle />
      </div>
    )
  }
}

export default connect()(Article);