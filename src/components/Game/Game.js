import React, { Component } from 'react';
import './Game.css';
import Choice from '../Choice/Choice';
import MessageBoard from '../MessageBoard/MessageBoard'
import StatusBar from '../StatusBar/StatusBar'

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
					<Choice name='study' onClick={this.handleClick}/>
					<Choice name='sleep' onClick={this.handleClick}/>
					<Choice name='eat' onClick={this.handleClick}/>
					<Choice name='exercise' onClick={this.handleClick}/>
					<Choice name='party' onClick={this.handleClick}/>
				</div>
				<div id="app-wrapper">
					<div id="messageboard" f><MessageBoard categories={this.state.message}></MessageBoard></div>
					<div id="statusbar"><StatusBar></StatusBar></div>
				</div>
			</div>
		);
	}
}

export default Game;