import React, { Component } from 'react';
import './Choice.css'

class Choice extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.handleClick(true, this.props.name);
	}


	mybutton.onclick = function() 
	{
    mybutton.disabled = true;
    setTimeout(function() {
        mybutton.disabled = false;
    }, 2000);
};​

	render() {
		return (
			<div id="choice-wrapper">
				<button className='Choice' onClick={this.handleClick}>
					{this.props.name}
				</button>
			</div>
		);
	}




}

export default Choice;