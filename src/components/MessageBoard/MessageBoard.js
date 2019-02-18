import React, { Component } from 'react';
import './MessageBoard.css';

const messages = {
	intro: [<p className="message">First day of college at UCLA!</p>],
	study: [<p className="message">You studied.</p>],
	sleep: [<p className="message">You slept.</p>],
	eat: [<p className="message">You ate.</p>],
	party: [<p className="message">You partied.</p>],
	exercise: [<p className="message">You exercised.</p>]
}

class MessageBoard extends Component {
	render() {
		// determines how many messages appear
		var len = this.props.messages.length;
		var lowerBound = 0;
		if (len > 15)
			lowerBound = len - 15;

		const list = [];
		for(var i = this.props.messages.length-1; i >= lowerBound; i--) {
			const val = this.props.messages[i];
			list.push(messages[val]);
		}
		if (len <= 15)
			list.push(messages.intro);
		return (
			<div id="text-box">
				{list}
			</div>
		);
	}
}

export default MessageBoard;
