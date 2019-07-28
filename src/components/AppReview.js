import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Commentslist from './Commentslist.js';
import Formlist from './Formlist.js';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";




var config={
    apiKey: 'AIzaSyCrgZHc8Lp9-43-lNYzDPrMM_vItEfBk8Y',
    authDomain:'578142440598-303ptsm6m94412nqj3ktni80l6hutqgm.apps.googleusercontent.com',
    databaseURL:'https://hotdog-1b362.firebaseio.com/'
};

firebase.initializeApp(config);



export default class AppReview extends Component {
  render() {

    return (
        <div className="comments-box">
            <Formlist/>
            <Commentslist/>
        </div>
     )
  }
}

