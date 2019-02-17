import React, { Component } from 'react';
import './Game.css';
import Choice from '../Choice/Choice';
import MessageBoard from '../MessageBoard/MessageBoard'
import StatusBar from '../StatusBar/StatusBar'

class Game extends Component {
	render() {
		return (
			<div id="game-wrapper">
				<div id="choice-panel">
					<Choice name='intelligence' />
					<Choice name='health' />
					<Choice name='happiness' />
					<Choice name='wealth' />
					<Choice name='i forgot' />
				</div>
				<div id="app-wrapper">
					<div id="messageboard"><MessageBoard></MessageBoard></div>
					<div id="statusbar"><StatusBar></StatusBar></div>
				</div>
			</div>
		);
	}
}

export default Game;