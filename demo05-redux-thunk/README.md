## redux-thunk与redux-saga

1. `redux`中间件是作用于`action`与`reducer`之间的，它会劫持`store`对象`dispatch`的`action`，并且在`action`和`reducer`之间引入处理异步逻辑的机制

2. 可以用于页面数据初始化等；

3. 通常，在异步逻辑进行之前（页面初始化，componentDidMount中）`dispatch`一个`action`，这个`action`在`reducer`中通常没有对应的处理，而中间件会捕获该`action`，
如果与中间件中的`action`一致，则执行中间件的异步逻辑；异步逻辑执行完成后中间件会`dispatch`一个新的action，这个action在reducer中有相应的处理逻辑，可以
用于获取到异步数据流后的页面更新；

4. redux-thunk与redux-saga的区别在于：
   1. `redux-thunk`的优点是其结果可以再次`dispatch`。使用`redux-thunk`你只需要在`actions/index.js`中定义需要中间件进行异步数据处理的两个`action`，然后在一个`action`中异步逻辑完成后`dipatch`另一个`action`用于`reducer`中的状态更新；
   而使用`redux-saga`时，你不仅要定义两个`action`，你还需要自己手动设置需要监听的`action`、对应的异步数据处理逻辑，最后手动`dispatch`另一个`action`。
   因此，代码结构来说`redux-thunk`比`redux-saga`更加简洁
   2. `redux-thunk`的异步处理逻辑全部放在了actions中，并不符合`redux`定义的action的结构：`action types + action creators`;
       而`redux-saga`虽然需要自己维护一些异步逻辑，但是代码结构化成都更好；
       
       
   3. 代码示例
   
   `redux-thunk`
   ```js
   // action creator
   export const getListAction = data => ({
       type: GET_LIST,
       data
   })

   /** 
    * redux-thunk使用：
    * 页面初始化时派发一个action: getTodoList；
    * 中间件redux-thunk匹配到对应action,然后执行getTodoList进行数据获取；
    * 获取到数据后，接着dispatch一个action: getListAction，
    * 然后执行reducer中对应的状态更新，用于真正的页面数据渲染；
    */
   export const getTodoList = () => {
       return (dispatch) => {
           axios.get('http://mock-api.com/rg1WrEKY.mock/list')
           .then(res => {
               dispatch(getListAction(res))
           })
       }
   }
   ```
   
   
   `redux-saga`
   ```js
   // saga.js
   function *fetchList() {
     const res = yield axios.get('http://mock-api.com/rg1WrEKY.mock/list');
     yield put(getListAction(res));    // put api: 命令中间件向store发一个action.
   }

   function *mySaga() {
       yield takeEvery(GET_MY_LIST, fetchList);   // takeEvery: 为每个满足匹配的action(GET_LIST)派发一个saga函数（fetchList)
   }

   export default mySaga;   
   
   
   // actions/index.js
   export const getListAction = data => ({
       type: GET_LIST,
       data
   })

   // redux-saga
   export const getMyListAction = () => ({
       type: GET_MY_LIST,
   }
   ```
