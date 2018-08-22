import {combineReducers} from 'redux';
import ArticleListReducer from './article-list';
import ArticleReducer from './article';

const indexReducer = combineReducers({
    articleList: ArticleListReducer,
    article: ArticleReducer
})

export default indexReducer;