import React, {Component} from 'react';
import './Console.css';

class Console extends Component {
    state = {clicked: false};
    changeColor = () => this.setState({clicked: !this.state.clicked});
    render () {
        return <button className={this.state.clicked ? "clicked" : "unclicked"} onClick = {this.changeColor}>change my color!</button>;
    }
}

export default Console;