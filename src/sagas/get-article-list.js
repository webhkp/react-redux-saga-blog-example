import { call, put, takeLatest } from 'redux-saga/effects';

function* getArticleList () {
  yield takeLatest('GET_ARTICLE_LIST', getListOfArticle);
}

function* getListOfArticle (action) {
  try {
      // console.log('agc');
      const { page } = action;

      const response = yield call(callArticleListApi, action);
      yield put({ type: 'GET_ARTICLE_LIST_SUCCESS', payload: response });
  } catch (error) {
      yield put({ type: 'GET_ARTICLE_LIST_ERROR', error });
  }
}
function callArticleListApi (articleListParam = {}) {
    return fetch('http://localhost:3030/article', {
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