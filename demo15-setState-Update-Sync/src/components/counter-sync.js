import React from 'react';

class counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    setStateAsync(state) {
        return new Promise((resolve, reject) => (
            this.setState(state, resolve)
        ));
    }
    
    async handleClick() {
        await this.setStateAsync({
            count: this.state.count + 1,
        })
        console.log('count: ', this.state.count)
    }

    render() {
        const {
            count
        } = this.state;

        return (
            <div>
                <div className="counter">{`count-promise: ${count}`}</div>
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        );
    }
}

export default counter;
