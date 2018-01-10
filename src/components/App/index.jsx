import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import styles from '../../styles/styles.css';

import Chrome from '../Chrome';

const App = () => (
    <BrowserRouter>
        <Route component={Chrome} />
    </BrowserRouter>
)

export default App;
