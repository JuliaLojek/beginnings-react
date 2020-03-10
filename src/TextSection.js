import React, {Component} from 'react';

class TextSection extends Component {
    render() {
        return <article><p>{this.props.content}</p></article>;
    }
}

export default TextSection;