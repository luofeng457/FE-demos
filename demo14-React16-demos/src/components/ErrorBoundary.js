import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    componentDidCatch(err, info) {
        // can be used to logging info, reporting errors, etc.
        console.log('ErrorBoundary invoked...');
    }
    render () {
        if (this.state.hasError) {
            return <h1>Something goes Wrong.</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;