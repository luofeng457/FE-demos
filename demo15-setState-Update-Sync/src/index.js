import React from 'react';
import { render } from 'react-dom';
import Counter from './components/counter';
import CounterPromse from './components/counter-sync';
import CounterFunc from './components/counter-func';


const App = () => {
    return (
        <div>
            <Counter />
            <br/>
            <CounterPromse />
            <br/>
            <CounterFunc />
        </div>
    );
}

render(<App />, document.querySelector('#root'))

