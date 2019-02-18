import React, { Component } from 'react';
import './Game.css';
import Choice from '../Choice/Choice';
import MessageBoard from '../MessageBoard/MessageBoard'
import StatusBar from '../StatusBar/StatusBar'
import Popup from '../Popup/Popup'
import Shop from '../Shop/Shop'

const changes = {
	study: {
		intelligence: 2,
		health: -2
	}
}

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: {
				study: false,
				sleep: false,
				eat: false,
				exercise: false,
				party: false,

			},
			messages: []
		}

		this.reset = this.reset.bind(this);
	}

	// when do we reset?
	reset = () => {
		this.setState({
			message: {
				study: false,
				sleep: false,
				eat: false,
				exercise: false,
				party: false,
			}
		})
	}

	handleClick = (i, label) => {
		if (i === true) {
			const newMsg = [...this.state.messages, label];
			this.setState({
				...this.state,
				messages: newMsg,
			});
		}
		
	}

	render() {
		const messages = this.state.messages;
		return (
			<div id="game-wrapper">
				<div id="choice-panel">
					
					<Choice name='study' onClick={this.handleClick.bind(this)} />
					<Choice name='sleep' onClick={this.handleClick.bind(this)} />
					<Choice name='eat'  onClick={this.handleClick.bind(this)} />
					<Choice name='exercise'  onClick={this.handleClick.bind(this)} />
					<Choice name='party' onClick={this.handleClick.bind(this)} />
          
				</div>
				<div id="app-wrapper">
          <div id="shop"><Shop onClick={this.handleClick.bind(this)}></Shop></div>
          <div id="popup"><Popup onClick={this.handleClick.bind(this)}></Popup></div>
					<div id="messageboard"><MessageBoard messages={messages} /></div>
					<div id="statusbar"><StatusBar ></StatusBar></div>
					
				</div>
			</div>
		);
	}
}

export default Game;