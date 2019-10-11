import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import AppIndex from './AppIndex.jsx';
import Contactpage from './Contactpage.js';
import AppReview from './AppReview.js';
import {Route} from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.js';
import ProfileContainer from '../containers/ProfileContainer';
import PrivateRoute from '../containers/PrivateRoute';
import NotFound from './NotFound';

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
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
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
      <Route exact path="/Login" component={LoginContainer} />
      <Route path="/Contactpage" component={Contactpage} />
      <Route path="/Review" component={AppReview} />
      <PrivateRoute path="/profile" component={ProfileContainer} />
      <Route component={NotFound} />
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


