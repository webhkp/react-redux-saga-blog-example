import React, { Component } from 'react';
import {connect} from 'react-redux';
import ArticleSingleSmall from './article-single-small';

class ArticleList extends Component{
  getArticleList() {
    let articleList = [];
    
    if(this.props.articleList.data) {
      articleList = this.props.articleList.data.map(article => {
        return <ArticleSingleSmall key={ article.id } { ...article }/>
      });
    }

    return articleList;
  }
  render() {
    return (
      <div className='articleList'>
        { this.getArticleList() }
      </div>
    )
  }
}

export default connect(state => ({
  articleList: state.articleList || {},
}))(ArticleList);