import { observer, inject} from 'mobx-react';
import React from 'react';

@inject('store')
@observer
class Casual extends React.Component {

    render() {
        return (
            <div>
                <h2>num: {this.props.store.num}</h2>
                <button onClick={this.handleClick}>increment</button>
            </div>
        )
    }

    handleClick = () => {
        this.props.store.increment();
    }
}

export default Casual;