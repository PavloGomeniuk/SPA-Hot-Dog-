import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import AppIndex from './AppIndex.jsx';
import Contactpage from './Contactpage.js';
import {Route} from 'react-router-dom';
import Header from './header.js';

if (module.hot) {
  module.hot.accept();
}


ReactDOM.render((
	<BrowserRouter>
		<Header />
	</BrowserRouter>
), document.getElementById('container'));
