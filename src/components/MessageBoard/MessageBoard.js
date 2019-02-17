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
			study: this.props.categories.study,
			sleep: this.props.categories.sleep,
			eat: this.props.categories.eat,
			party: this.props.categories.party,
			exercise: this.props.categories.exercise
		};
	}

	printAll = () => {
		var output ="";
		output+=print(messages.study, this.state.study, this.state.change);
		output+=print(messages.sleep, this.state.sleep, this.state.change);
		output+=print(messages.eat, this.state.eat, this.state.change);
		output+=print(messages.party, this.state.party, this.state.change);
		output+=print(messages.exercise, this.state.exercise, this.state.change);
		return(<p className="message">{output}</p>);
	}


	render(){
		return(
			<div id="text-box">
				{this.printAll()}
				<p className="message">{messages.intro}</p>
			</div>
		);
	}
	
	
}


export default MessageBoard;
