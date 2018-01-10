import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import * as actions from './actions';

import App from './components/App';

let store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

store.dispatch(actions.loadApiKey());

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
)