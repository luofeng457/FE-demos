import React from 'react';

class counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    
    handleClick() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1 
        }))
        console.log('count: ', this.state.count)
    }

    render() {
        const {
            count
        } = this.state;

        return (
            <div>
                <div className="counter">{`count-func: ${count}`}</div>
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        );
    }
}

export default counter;
