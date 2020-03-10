import React, {Component} from 'react';

class Counter extends Component {
    state = {count: 0};
    incrementCount = () => this.setState(prevState => ({count: prevState.count + 1}));
    decrementCount = () => this.setState(prevState => ({count: prevState.count - 1}));
    resetCount = () => this.setState({count: 0});
    render() {
        return (
            <div>
                <span>Count: {this.state.count} </span>
                <button onClick = {this.incrementCount}>add 1</button>
                <button onClick = {this.decrementCount}>subtract 1</button>
                <button onClick = {this.resetCount}>reset</button>
            </div>
        );
    }
}

export default Counter;