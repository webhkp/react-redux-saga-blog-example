import React, { Component } from 'react';
import {connect} from 'react-redux';
import ArticleList from '../common/article/article-list';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ARTICLE_LIST',
      page: 1
    })
  }
  render() {
    return (
      <div className='home'>
        <ArticleList />
      </div>
    )
  }
}

export default connect(state => ({
  
}))(Home);