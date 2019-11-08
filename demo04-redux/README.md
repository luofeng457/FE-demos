Redux

## 优点
1. 状态持久化：
2. 状态可回溯：每个新状态是基于原状态创建的而不是直接修改原状态；
3. FP：reducer使用纯函数；
4. 中间件：提供了中间件支持，用于处理异步数据流；
  > Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
