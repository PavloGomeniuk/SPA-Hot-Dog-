import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments.js';
import CommentsTitle from './CommentsTitle.jsx';
import Toggle from './Toggle.jsx';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

export default class Commentslist extends Component {
	constructor() {
		super();
		this.state={
			showComments:false,
			comments: []
		}
	}

	componentDidMount() {
		this.bindAsArray(firebase.database().ref().child('comments'), 'comments');
	}

	_toggleShowComent() {
		this.setState({
			showComments: !this.state.showComments
		})
	}
  render() {
  	
  	let commentsList;
  	const commentsCount=this.state.comments.length;
  	if (commentsCount>0 && this.state.showComments) {
  		commentsList = <ul className="comments-list">
		    				{ this.state.comments.map((comment,index)=> {
		    					return <Comments key={index} author={comment.name} text={comment.text} />
		    				})
		    				}
		    			</ul>
  	}
    return (
		<div className="comments-body">
			<CommentsTitle counter={commentsCount}/>
		    <Toggle isShow={this.state.showComments} toggleComments={this._toggleShowComent.bind(this)} />
		    {commentsList}
		</div>
     )
  }
}

ReactMixin(Commentslist.prototype, ReactFireMixin); 
