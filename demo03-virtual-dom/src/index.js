import React from 'react';
import ReactDOM from 'react-dom';
import { createElement, render, renderDOM} from './lib/element';
import diff from './lib/diff';
import patch from './lib/patch';

let v_dom = createElement('ul', {className: 'list', style: "color: green", value: 123}, [
    createElement('li', {className: 'first'}, ['react']),
    createElement('li', {className: 'next'}, ['vue']),
])
let v_dom_2 = createElement('ul', {style: "color: green", value: 123}, [
    createElement('li', {className: 'important'}, ['react']),
    createElement('li', {style: "color: red"}, ['Angular']),
])

let el = render(v_dom);

renderDOM(el, document.body);

let patches = diff(v_dom, v_dom_2);
console.log('patches: ', patches)





const App = () => (
    <div className="wrapper" id="target">
        <h2>Virtual DOM Demo</h2>
        <button onClick={() => patch(el, patches)}>Dom diff</button>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));