import React, { Component } from 'react';
import './Game.css';
import Choice from '../Choice/Choice';
import MessageBoard from '../MessageBoard/MessageBoard'
import StatusBar from '../StatusBar/StatusBar'
import Popup from '../Popup/Popup'
import Shop from '../Shop/Shop'


class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: {
				intelligence: this.randIntelligence(),
				health: 100,
				wealth: this.randWealth(),
				happiness: 50,
				attractiveness: 50,
			},
			messages: [],
			count: 0
		}
	}

	randIntelligence = () => {
        var rand = Math.floor(1 + Math.random() * (99));
        return rand;
	}

	randWealth = () => {
        var rand = Math.random();
		if(rand > 0.5)
			return 75;
		else 
			return 25;
	}

	dependsOnWealth = () => {
		var wealth = this.state.status.wealth;
		if(wealth > 50)
			return 75;
		else 
			return 25;
	}
	
	handleClick = (i, label) => {
		if (i === true) {
			const newMsg = [...this.state.messages, label];
			const newStats = {
				...this.state.status
			}

			switch(label) {
				case 'study':
					newStats.intelligence = newStats.intelligence + 2;
					newStats.health = newStats.health - 2;
					break;
				case 'sleep':
					newStats.health = newStats.health + 2;
					newStats.happiness = newStats.happiness + 2;
					break;
					case 'eat':
					newStats.health = newStats.health + 1;
					newStats.happiness = newStats.happiness + 1;
					newStats.attractiveness = newStats.attractiveness - 1;
					newStats.wealth = newStats.wealth - 1;
					break;
					case 'exercise':
					newStats.health = newStats.health + 2;
					newStats.intelligence = newStats.intelligence + 1;
					newStats.attractiveness = newStats.attractiveness + 1;
					break;
					case 'party':
					newStats.happiness = newStats.happiness + 4;
					newStats.intelligence = newStats.intelligence - 2;
					newStats.health = newStats.health - 2;
					break;
			}
			console.log(this.state.status);
			this.setState({
				status: newStats,
				messages: newMsg,
				count: this.count + 1,
			});
		}
		
	}

	render() {
		const messages = this.state.messages;
		const status = this.state.status;
		return (
			<div id="game-wrapper">
				<div id="choice-panel">
					<Choice name='study' onClick={this.handleClick.bind(this)} />
					<Choice name='sleep' onClick={this.handleClick.bind(this)} />
					<Choice name='eat'  onClick={this.handleClick.bind(this)} />
					<Choice name='exercise' onClick={this.handleClick.bind(this)} />
					<Choice name='party' onClick={this.handleClick.bind(this)} />
				</div>
				<div id="app-wrapper">
          <div id="shop"><Shop onClick={this.handleClick.bind(this)}></Shop></div>
          <div id="popup"><Popup onClick={this.handleClick.bind(this)}></Popup></div>
					<div id="messageboard"><MessageBoard messages={messages} /></div>
					<div id="statusbar"><StatusBar status={status} ></StatusBar></div>
				</div>
			</div>
		);
	}
}

export default Game;