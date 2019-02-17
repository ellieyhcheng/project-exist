import React, { Component } from 'react';
import './MessageBoard.css';

const messages = {
		intro:"First day of college.",
		study:"You studied.",
		sleep:"You slept.",
		eat:"You ate.",
		party:"You partied.",
		exercise:"You excercised."
	}
function print(text1,state2,state0){
		
		if(state2 && state0){
			var a ="";
			a+=text1;
			return a;
		}
		return "";
}
class MessageBoard extends Component{
	constructor(props){
		super(props);
		this.state = {
			change: true,
			study: true,
			sleep: false,
			eat: false,
			party: false,
			exercise: false
		};
	}

	printAll = () => {
		var output ="";
		output+=print(messages.study, this.state.study, this.state.change);
		output+=print(messages.sleep, this.state.sleep, this.state.change);
		output+=print(messages.eat, this.state.eat, this.state.change);
		output+=print(messages.party, this.state.party, this.state.change);
		output+=print(messages.exercise, this.state.exercise, this.state.change);
		return(<p>{output}</p>);
	}


	render(){
		return(
			<div id="text-box">
				{this.printAll()}
				<p>{messages.intro}</p>
			</div>
			);
	}
	
	
}


export default MessageBoard;
