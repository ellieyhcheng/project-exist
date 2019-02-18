import React, { Component } from 'react';
import './Choice.css'

class Choice extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
		this.props.onClick(true, this.props.name);
	}

	render() {
		return (
			<button className='Choice' onClick={this.handleClick}>
				{this.props.name}
			</button>
		);
	}
}

export default Choice;