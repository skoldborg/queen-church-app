import React, { Component } from 'react';

import styles from './button.css';

class Button extends Component {
    render() {
        return (
            <button onClick={ () => this.props.onStartClick() } className="button">{ this.props.label }</button>
        );
    } 
}

export default Button;
