import {combineReducers} from 'redux';
import ArticleListReducer from './article-list';
import ArticleReducer from './article';
import Flag from './flag';

const indexReducer = combineReducers({
    articleList: ArticleListReducer,
    article: ArticleReducer,
    flag: Flag,
});

export default indexReducer;