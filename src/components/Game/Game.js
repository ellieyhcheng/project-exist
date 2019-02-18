import React, { Component } from 'react';
import './Game.css';
import Choice from '../Choice/Choice';
import MessageBoard from '../MessageBoard/MessageBoard'
import StatusBar from '../StatusBar/StatusBar'

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

			}
		}
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
		if(i === true) {
			this.setState({
				message: {
					...this.state.message, label: true
				}
			});
		}
	}
	

	render() {
		return (
			<div id="game-wrapper">
				<div id="choice-panel">
					<Choice name='Study' onClick={this.handleClick} />
					<Choice name='Sleep' onClick={this.handleClick} />
					<Choice name='Eat'  onClick={this.handleClick} />
					<Choice name='Exercise'  onClick={this.handleClick} />
					<Choice name='Party' onClick={this.handleClick} />

				</div>
				<div id="app-wrapper">
					<div id="messageboard"><MessageBoard categories={this.state.message}></MessageBoard></div>
					<div id="statusbar"><StatusBar ></StatusBar></div>
				</div>
			</div>
		);
	}
}

export default Game;