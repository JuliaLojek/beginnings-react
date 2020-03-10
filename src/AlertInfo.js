import React, {Component} from 'react';

class AlertInfo extends Component {
    alertClick = () => {alert('I am an alert!')};
    render() {
        return <button onClick = {this.alertClick}>show alert!</button>;
    }
}

export default AlertInfo;