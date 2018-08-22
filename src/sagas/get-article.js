import { call, put, takeLatest } from 'redux-saga/effects';

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
    return fetch(`http://localhost:3030/article?slug=${articleParam.slug}&$limit=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      })
      // .then(handleApiErrors) // we'll make this in a second
      .then(response => response.json())
      .then(json => json)
      .catch((error) => { throw error });
}

export default getArticleList;