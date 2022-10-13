import { call, takeEvery, put } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';

function* workGetCatsFetch() {
  console.log("🚀 ~ file: catSaga.js ~ line 6 ~ function*workGetCatsFetch ~ cats")
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats = yield cats.json();
  const formattedCatsShorthened = formattedCats.slice(0, 10)
  yield put(getCatsSuccess(formattedCatsShorthened));
}

function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga;