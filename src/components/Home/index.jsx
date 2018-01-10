import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import styles from './home.css';
import Button from '../Button';
import { QueenIcon, ChurchIcon } from '../Icons';

class Home extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    test() {
        console.log('hello');
    }

    render() {
        
        return (
            <div className="home">
                <div className="home__inner">
                    <div className="home__intro">
                        <h1 className="home__title">Är det...</h1>
                        <h2 className="home__subtitle">
                            Kyrkogatan <br />
                            eller <br />
                            Drottninggatan?
                        </h2>
                    </div>
                    
                    <div>
                        <Link to="/game">
                            <Button onStartClick={ this.props.actions.startGame } label="Hit me!"  />
                        </Link>
                    </div>
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
)(Home);
