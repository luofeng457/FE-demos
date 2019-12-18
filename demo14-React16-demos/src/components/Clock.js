import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.start || Date.now()
        }
    }
    componentDidMount() {
        this.tid = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.tid);
    }
    tick() {
        this.setState({
            date: this.state.date + 1000
        })
    }
    render() {
        return (
        <div>It is {new Date(this.state.date).toLocaleTimeString()}.</div>
        )
    }
}

export default Clock;