import React, {Component} from 'react';

export default class Toggle extends Component {
	render(){
	return (
		<button className="button" onClick={this.props.toggleComments}> 
			{this.props.isShow ? "hide" : "show"} comments
		</button>
		)
	}
}