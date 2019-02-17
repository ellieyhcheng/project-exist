import React, { Component } from 'react';
import './Game.css';
import Choice from './Choice.js'

class Game extends Component {
	return {
		render (
			<div>
          		<Choice name='intelligence'/>
          		<Choice name='health'/>
          		<Choice name='happiness'/>
          		<Choice name='wealth'/>
          		<Choice name='i forgot'/>
        	</div>
		);
	}
}

export default Game;