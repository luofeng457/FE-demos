import React from 'react';
import ReactDOM from 'react-dom';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        const portalRoot = document.getElementById('portal')
        portalRoot.appendChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}