import { call, put, takeLatest } from 'redux-saga/effects';
import {API_URL} from '../config/config';

function* getArticleList () {
  yield takeLatest('GET_ARTICLE_SINGLE', getSingleArticle);
}

function* getSingleArticle (action) {
  try {
      // const { page } = action;
      const response = yield call(callArticleApi, action);

      yield put({ type: 'GET_ARTICLE_SUCCESS', payload: response });
  } catch (error) {
      yield put({ type: 'GET_ARTICLE_ERROR', error });
  }
}
function callArticleApi (articleParam = {}) {
    return fetch(`${API_URL}/article?slug=${articleParam.slug}&$limit=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .catch((error) => { throw error });
}

export default getArticleList;