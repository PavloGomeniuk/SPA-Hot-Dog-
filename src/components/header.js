import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import AppIndex from './AppIndex.jsx';
import Contactpage from './Contactpage.js';
import AppReview from './AppReview.js';
import {Route} from 'react-router-dom';

export default class Header extends Component {
          render() {
            return (
     <div>
        <header className="header" id="header">
    <section className="header-general-section">
      <img src="../src/assets/2-layers.png" className="header-general-section-img"/>
    </section>
    <nav className="header-nav">
      <ul className="header-nav-ul">
        <li>
          <Link to="/">menu</Link>
        </li>
        <li>
           <Link to="/Review">Review</Link>
        </li>
        <li>
          <a href="#footer">About Us</a>
        </li>
        <li>
          <Link to="/Contactpage">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
  <main className="main">
      <Switch>
      <Route exact path="/" component={AppIndex} />
      <Route path="/Contactpage" component={Contactpage} />
       <Route path="/Review" component={AppReview} />
    </Switch>
  </main>
  <footer className="footer" id="footer">
    <section className="footer-general-section">
      <p>® 2019 Dirty Dogs all rights reserved</p>
      <p>274 Marconi Blvd. Columbus, Ohio 43215    |   614.538.0095   |   Contact Us</p>
    </section>
  </footer>
     </div>
)
}}


