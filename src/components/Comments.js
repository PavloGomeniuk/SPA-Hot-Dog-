import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Commentslist extends Component {
  render() {

    return (
		    <li className="comments-item">
		        <h3>
		        	{this.props.author}
		        </h3>
		        <p>{this.props.text}</p>
		    </li>
     )
  }
}