import { all } from 'redux-saga/effects'
import getArticleList from "./get-article-list";
import getArticle from "./get-article";

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        getArticleList(),
        getArticle(),
    ])
}