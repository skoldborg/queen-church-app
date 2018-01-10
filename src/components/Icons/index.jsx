import React, { Component } from 'react';

import styles from './icons.css';

export class QueenIcon extends Component {
    render() {
        return (
            <svg className="icon icon--queen" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                <g>
                    <g>
                        <polygon points="10,6.7 8,8 10,9.3 12,8 		" />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon points="20,6.7 18,8 20,9.3 22,8 		" />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon points="20,10.9 15,7.6 10,10.9 5,7.6 6.3,19.3 23.7,19.3 25,7.6 		" />
                    </g>
                </g>
                <g>
                    <g>
                        <rect x="6.3" y="20.7" width="17.4" height="2.6" />
                    </g>
                </g>
            </svg>
        );
    }
}

export class ChurchIcon extends Component {
    render() {
        return (
            <svg className="icon icon--church" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                <polygon points="23,20.1 23,17.9 18.6,15.8 18.6,24.4 20.3,24.4 20.3,23 21.1,21.7 21.9,23 21.9,24.4 23,24.4 25,24.4 25,20.1 " />
                <polygon points="7,20.1 5,20.1 5,24.4 7,24.4 8.1,24.4 8.1,23 8.9,21.7 9.7,23 9.7,24.4 11.4,24.4 11.4,15.8 7,17.9 " />
                <path d="M11.9,15.6v8.8h2.3v-3.2L15,20l0.8,1.3v3.2h2.3v-8.8L15,10.9L11.9,15.6z M16.2,15.1v0.7h-0.8v1h-0.7v-1h-0.8v-0.7h0.8v-0.7
                    h0.7v0.7L16.2, 15.1L16.2, 15.1z"/>
                        < polygon points = "15,9.4 18.6,15 23.7,17.4 23.7,16.5 19.2,14.4 15.2,8.4 15.2,6.7 16.2,6.7 16.2,6.3 15.2,6.3 15.2,5.6 14.8,5.6 
            14.8, 6.3 13.8, 6.3 13.8, 6.7 14.8, 6.7 14.8, 8.4 10.8, 14.4 6.3, 16.5 6.3, 17.4 11.4, 15 "/>
            </svg>
        );
    }
}