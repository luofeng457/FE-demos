import React from 'react';

export default React.forwardRef((props, ref) => (
    <button className="fancy-button" ref={ref}>
        {props.children}
    </button>
))