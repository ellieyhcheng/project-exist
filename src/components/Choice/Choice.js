import React, { Component } from 'react';
import './Choice.css'

class Choice extends Component 
{
	constructor(props) 
	{
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isButtonDisabled: false
		};
	}

	handleClick = (event) => 
	{
		event.preventDefault();
		this.setState({
			isButtonDisabled: true
		});

		setTimeout(() => this.setState({ isButtonDisabled: false}), 3000);
		return this.props.handleClick()
	}



	render() 
	{
		return (
			

				<button className='Choice' onClick={this.handleClick}
				disabled={this.state.isButtonDisabled}> {this.props.name} </button>
		);
	}
}

export default Choice;









