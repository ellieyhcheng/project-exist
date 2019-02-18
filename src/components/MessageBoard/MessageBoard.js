import React, { Component } from 'react';
import './MessageBoard.css';

const messages = {
	intro: [<p className="message">First day of college.</p>],
	study: [<p className="message">You studied.</p>],
	sleep: [<p className="message">You slept.</p>],
	eat: [<p className="message">You ate.</p>],
	party: [<p className="message">You partied.</p>],
	exercise: [<p className="message">You exercised.</p>]
}

class MessageBoard extends Component {
	render() {
		const list = [];
		for(var i = this.props.messages.length-1; i >= 0; i--) {
			const val = this.props.messages[i];
			list.push(messages[val]);
		}
		return (
			<div id="text-box">
				{list}
				{messages.intro}
			</div>
		);
	}


}

export default MessageBoard;
