import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';

// observeable 事件生产者，设定需要变更的状态，通过action派发事件更新状态
let counterState = observable({
    count: 0,
})

counterState.handleClick = action(() => {
    counterState.count += 1;
})

// @observer 事件订阅者，把需要更新的组件作为观察者，会在渲染的时候自动追踪observable的变化
const Counter = observer(() => {
    const [ count, setCount ] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>
})

ReactDOM.render(<Counter counterState={counterState} />, document.getElementById('root'))