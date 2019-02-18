import React, { Component } from 'react';
import './Popup.css';
import Choice from '../Choice/Choice';

class Popup extends Component{
	constructor(props){
		super(props);
		this.state = {
			midterm:false,
			hospital:false,
			friend:true,
			job:false,
			thisty:false,
		};
	}
	initialize_response = () => 
	{
		return(
			<div>
				<button className="YesNoOption">Yes</button>
				<button className="YesNoOption">No</button>
			</div>
		);
	}
	hospital_event = () => {
		var intro = "You have a new event!";
		var output= "Your health have dropped below 20!"
		var output2= "Want to spend 50 wealth to gain 30 health?"
		return(
			<div id="event-box">
				<p id="event-text">
				{intro}</p>
				<p id="event-text">{output}</p>
				<p id="event-text">{output2}</p>
				{this.initialize_response()}
			</div>
		);
	}

	thirsty_event = () => {
		var intro = "You have a new event!";
		var output= "It's Thursday!!"
		var output2= "Want to go out tonight?"
		return(
			<div id="event-box">
				<p id="event-text">
				{intro}</p>
				<p id="event-text">{output}</p>
				<p id="event-text">{output2}</p>
				{this.initialize_response()}
			</div>
		);
	}

	midterm_event = () => {
		var intro = "You have a new event!";
		var output= "It's midterm season!!"
		var output2= "Are you going to take a midterm?"
		return(
			<div id="event-box">
				<p id="event-text">
				{intro}</p>
				<p id="event-text">{output}</p>
				<p id="event-text">{output2}</p>
				{this.initialize_response()}
			</div>
		);
	}

	friend_event = () => {
		var intro = "You have a new event!";
		var output= "You bumped into a stranger!!"
		var output2= "Befriend them?"
		return(
			<div id="event-box">
				<p id="event-text">
				{intro}</p>
				<p id="event-text">{output}</p>
				<p id="event-text">{output2}</p>
				{this.initialize_response()}
			</div>
		);
	}

	job_event = () => {
		var intro = "You have a new event!";
		var output= "You have received a job offer!!"
		var output2= "Take the job?"
		return(
			<div id="event-box">
				<p id="event-text">
				{intro}</p>
				<p id="event-text">{output}</p>
				<p id="event-text">{output2}</p>
				{this.initialize_response()}
			</div>
		);
	}

	no_event = () => {
		return(
			<div id="event-box">
				<p id="event-text">
				No event yet!</p>
			</div>
		);
	}

	perform_event = () => {
		if(this.state.midterm){
			return(
				this.midterm_event()
				);
		}else if(this.state.hospital){
			return(
				this.hospital_event()
				);
		}else if(this.state.friend){
			return(
				this.friend_event()
				);
		}else if(this.state.job){
			return(
				this.job_event()
				);
		}else if(this.state.thirsty){
			return(
				this.thirsty_event()
				);
		}else{
			return(
				this.no_event()
				);
		}

	}


	render(){
		return(
			this.perform_event()

			);
	}
	
	
}


export default Popup;
