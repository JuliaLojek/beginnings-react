import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return <footer><p>{this.props.footerText}</p></footer>;
    }
}

export default Footer;