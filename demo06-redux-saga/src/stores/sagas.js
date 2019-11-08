import { put, takeEvery } from 'redux-saga/effects';
import { GET_LIST, getListAction } from '../actions';
import axios from 'axios';


/**
 * redux-saga中间件的基本逻辑：
 * 页面初始化时store dispatch一个action：GET_LIST,
 * 中间件匹配到GET_LIST后派发一个saga函数fetchList(Generator函数);
 * fetchList获取页面初始化所需要的数据，然后出发一个页面渲染相关的action：getListAction给store，
 */
function *fetchList() {
  const res = yield axios.get('http://mock-api.com/rg1WrEKY.mock/list');
  yield put(getListAction(res));    // put api: 命令中间件向store发一个action.
}

function *mySaga() {
    yield takeEvery(GET_LIST, fetchList);   // takeEvery: 为每个满足匹配的action(GET_LIST)派发一个saga函数（fetchList)
}

export default mySaga;