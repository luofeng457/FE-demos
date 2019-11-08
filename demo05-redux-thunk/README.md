## redux-thunk与redux-saga

1. redux中间件是作用于action与reducer之间的，它会劫持store对象dispatch的action，并且在action和reducer之间引入处理异步逻辑的机制

2. 可以用于页面数据初始化等；

3. 通常，在异步逻辑进行之前（页面初始化，componentDidMount中）dispatch一个action，这个action在reducer中通常没有对应的处理，而中间件会捕获该action，
如果与中间件中的action一致，则执行中间件的异步逻辑；异步逻辑执行完成后中间件会dispatch一个新的action，这个action在reducer中有相应的处理逻辑，可以
用于获取到异步数据流后的页面更新；

4. redux-thunk与redux-saga的区别在于：
   1. 使用redux-thunk你只需要定义需要中间件进行异步数据处理的两个action，然后在一个action中异步逻辑完成后dipatch另一个action用于reducer中的状态更新；
   而使用redux-saga时，你不仅要定义两个action，你还需要自己手动设置需要监听的action、对应的异步数据处理逻辑，最后手动dispatch另一个action。
   因此，代码结构来说`redux-thunk`比`redux-saga`更加简洁
   2. `redux-thunk`的异步处理逻辑全部放在了actions中，并不符合`redux`定义的action的结构：`action types + action creators`;
       而`redux-saga`虽然需要自己维护一些异步逻辑，但是代码结构化成都更好；
