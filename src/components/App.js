import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import {BrowserRouter} from 'react-router-dom';
import Header from './header.js';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers'

if (module.hot) {
  module.hot.accept();
}
const middleware = [thunk]


const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	</Provider>
), document.getElementById('container'));
