import React, { Component } from 'react';

function log(target, name, descriptor) {
    let oldVal = descriptor.value;

    descriptor.value = function () {
        console.log(`btn clicked ${this.state.count + 1} times`);
        return oldVal.apply(this, arguments);
    }

    return descriptor;
}

function log2 (times) {
    return function(target, name, descriptor) {
        let oldVal = descriptor.value;

        descriptor.value = function () {
            console.log(`btn clicked ${times} times`);
            return oldVal.apply(this, arguments);
        }
    
        return descriptor;
    }
}

function log3(c) {
    return function(target, name, descriptor) {
        let oldVal = descriptor.value;

        descriptor.value = function() {
            let res = oldVal.apply(this, [...arguments, c])
            console.log('res:', res, arguments, c)
            return res
        }
    }
}

@decoratorHoc
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>{this.state.count}</button>
                <button onClick={this.add.bind(this, 1, 2)}>Add</button>
            </>
        )
    }

    @log
    handleClick() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    @log3(3)
    add() {
        return [...arguments].reduce((a, b) => a + b);
    }
}

function getDisplayName(component) {
    return component.displayName || component.name || 'hcomponent';
}

function decoratorHoc(WrappedComponent) {
    return class HOC extends Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`
        render() {
            return (
                <>
                    <div className="tit">hoc</div>
                    <WrappedComponent />
                </>
            )
        }
    }
}

export default Test;