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
        this.props.actions.advanceGame(answer);
    }

    render() {
        return(
            <div className="answer-bar">
                <div className="answer-bar__button" onClick={ () => this.advanceGame('Drottninggatan') }>
                    <QueenIcon />
                </div>
                <div className="answer-bar__button" onClick={ () => this.advanceGame('Kyrkogatan') }>
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
