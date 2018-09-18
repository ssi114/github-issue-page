import { put, call, all, takeLatest } from 'redux-saga/effects';
import { API_CALL_GET_BUG_LIST, BUG_LIST_RECEIVED } from "./constants";

import fetchApi from './API/fetchApi';
import { EndPoint } from './API/constantApi';

function* getBugListData() {
  let bugList = yield call(fetchApi, EndPoint.list);
  yield put({ type: BUG_LIST_RECEIVED, data: bugList });
}

function* watchApiCallsAsync() {
  yield takeLatest(API_CALL_GET_BUG_LIST, getBugListData)
}


// merge more then one saga
export default function* rootSaga() {
  yield all([
    watchApiCallsAsync()
  ])
}