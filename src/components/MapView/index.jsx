import React, { Component } from 'react';
import 'whatwg-fetch';

import styles from './map-view.css';

class MapView extends Component {
    constructor() {
        super();
    }

    render() {
        let apiUrl = `${this.props.apiUrl}&location=${this.props.coordinates}&key=${this.props.apiKey}`;

        return (
            <div className="map-view">
                <img className="map-view__street-view" src={ apiUrl } alt="Google Map Street View"/>
            </div>
        );
    }
}

export default MapView;