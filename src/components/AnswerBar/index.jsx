import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './answer-bar.css';

import * as actions from '../../actions';
import { QueenIcon, ChurchIcon } from '../Icons';

class AnswerBar extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    advanceGame(answer) {
        this.animateAnswers();
        this.props.actions.advanceGame(answer);
    }

    animateAnswers() {
        const btns = document.querySelectorAll('.answer-bar__button');

        btns.forEach((btn, i) => {
            const game = this.props.game;
            const correctAnswer = game.currentLocation.street;
            let btnValue = btn.getAttribute('data-value');
            
            if (btnValue === correctAnswer) {
                btn.classList.add('answer-bar__button--correct');
                
                setTimeout(() => {
                    btn.classList.remove('answer-bar__button--correct');
                }, 200);
            } else {
                btn.classList.add('answer-bar__button--incorrect');

                setTimeout(() => {
                    btn.classList.remove('answer-bar__button--incorrect');
                }, 200);
            }

            
        })
    }

    render() {
        return(
            <div className="answer-bar">
                <div className="answer-bar__button" data-value="Drottninggatan" onClick={ () => this.advanceGame('Drottninggatan') }>
                    <QueenIcon />
                </div>
                <div className="answer-bar__button" data-value="Kyrkogatan" onClick={ () => this.advanceGame('Kyrkogatan') }>
                    <ChurchIcon />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { game: state }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerBar)
