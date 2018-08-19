import {combineReducers} from 'redux';
import ArticleListReducer from './article-list';
// import ActiveUserReducer from './reducer-active-user'

const indexReducer = combineReducers({
    articleList: ArticleListReducer,
    // activeUser: ActiveUserReducer
})

export default indexReducer;