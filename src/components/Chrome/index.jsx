import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './chrome.css';

import Home from '../Home';
import Game from '../Game';

class Chrome extends Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        const game = this.props.game;

        return (
            <div className="chrome">
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { game: state }
}

export default connect(
    mapStateToProps
)(Chrome);
