import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './game.css';

import MapView from '../MapView';
import ScoreBar from '../ScoreBar';
import AnswerBar from '../AnswerBar';


class Game extends Component {
    constructor(props) {
        super();
        this.props = props;

        // Redirect user to start screen on reload
        if (this.props.game.round === 0) {
            this.props.history.push('/');
        }
    }

    render() {
        const game = this.props.game;
        const location = game.currentLocation;

        return (
            <div className="game">
                <ScoreBar score={ game.score } />
                {game.apiKey !== '' &&
                    <MapView apiUrl={ game.apiUrl } apiKey={ game.apiKey } coordinates={ location.coordinates } />
                }
                <AnswerBar />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { game: state }
}

export default connect(
    mapStateToProps
)(Game);
