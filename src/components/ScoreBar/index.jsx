import React, { Component } from 'react';
import styles from './score-bar.css';

class ScoreBar extends Component {
    render() {
        return (
            <div className="score-bar">
                <p className="score-bar__label">Score: { this.props.score }</p>
            </div>
        );
    }
}

export default ScoreBar;
