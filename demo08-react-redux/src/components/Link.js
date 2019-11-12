import React from 'react';

const Link = ({ active, children, onClick }) => (
    <button
        disabled={active}
        onClick={onClick}
        style={{margin: "20px 5px"}}
    >
        {children}
    </button>
)

export default Link;