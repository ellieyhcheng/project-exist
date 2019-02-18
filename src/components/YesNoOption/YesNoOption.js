import React, { Component } from 'react';
import './YesNoOption.css'

class YesNoOption extends Component {
	render() {
		return (
			<button className='YesNoOption'>yes</button>
			<button className='YesNoOption'>no</button>
		);
	}
}

export default YesNoOption