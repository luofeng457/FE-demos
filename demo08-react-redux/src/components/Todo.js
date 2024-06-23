import React from 'react';

const Todo = ({ onClick, text, completed }) => (
    <li
        style={{textDecoration: (completed ? 'line-through' : 'none')}}
        onClick={onClick}
    >
        {text}
    </li>
)

export default Todo;