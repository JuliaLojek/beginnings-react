import React, {Component} from 'react';
import './Nav.css';
import Menu from './Menu';

class Nav extends Component {
    state = {isVisible: false};
    changeMenuVisibility = () => this.setState({isVisible: !this.state.isVisible});
    render() {
        return (
            <nav>
                <div className="topbar">
                    <h2>*LOGO*</h2>
                    <h2 onClick = {this.changeMenuVisibility}>menu</h2>
                </div>
                {this.state.isVisible ? <Menu /> : null}
            </nav>
        )
    }
}

export default Nav;