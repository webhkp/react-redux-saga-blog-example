import { call, put, takeLatest } from 'redux-saga/effects';
import {API_URL} from '../config/config';

function* getArticleList () {
  yield takeLatest('GET_ARTICLE_LIST', getListOfArticle);
}

function* getListOfArticle (action) {
  try {
      const { page } = action;
      const response = yield call(callArticleListApi, action);

      yield put({ type: 'GET_ARTICLE_LIST_SUCCESS', payload: response });
  } catch (error) {
      yield put({ type: 'GET_ARTICLE_LIST_ERROR', error });
  }
}
function callArticleListApi (articleListParam = {}) {
    return fetch(`${API_URL}/article`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
    //   .then(json => json)
      .catch((error) => { throw error });
}

export default getArticleList;