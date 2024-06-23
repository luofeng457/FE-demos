## Redux

### 优点
1. 状态持久化：
2. 状态可回溯：每个新状态是基于原状态创建的而不是直接修改原状态；
3. FP：reducer使用纯函数；
4. 中间件：提供了中间件支持，用于处理异步数据流；
  > Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
  Link: https://redux.js.org/advanced/middleware
  
  
### 缺点
1. 代码结构繁重
2. 广播式的发布订阅：每次dipatch一个action时需要遍历reducers去重新获取新状态；
3. 单一store维护：项目较大时，单个store的频繁修改会让页面交互卡顿；
4. 不支持TypeScript;


### middleware
`Redux Middleware`作用于`action`和`reducer`之间，由于`createStore()`创建的`store`本身只支持同步数据流，因此通过引入`middleware`来处理其中的异步数据流。通常，可以通过`Redux Middleware`进行异步数据获取、路由、日志记录等；

`Redux Middleware`中间件需要满足的特点：
1. 可以直接通过调用而不是每次引入一个外部封装函数（需要重新dispatch）；
2. 可以支持多个`middleware`的链式调用；

以下是一个中间件及`applyMiddleware`的模拟实现：


```js
// a simple middleware realization mocker
const logger = store => next => action => {   // next是一个dispatch函数
  console.log('dispatching ation: ', action);
  let result = next(action);                  // 调用applyMiddleware中传入的重写的store.dispatch
  console.log('new state: ', result);
  return result;                              // 返回dispatch供链式调用
}

// applyMiddleware
const applyMiddleware = (store, middlewares) => {
  middlewares = middleware.slice();
  middlewares.reverse();
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));  // 为每个中间件重写store.dispatch
}
```
