import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';

let counterState = observable({
    count: 0,
})

counterState.handleClick = action(() => {
    counterState.count += 1;
})

const Counter = observer(() => {
    const [ count, setCount ] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>
})

ReactDOM.render(<Counter counterState={counterState} />, document.getElementById('root'))