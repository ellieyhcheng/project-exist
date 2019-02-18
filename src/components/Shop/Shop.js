import React, { Component } from 'react';
import './Shop.css';
import Choice from '../Choice/Choice';

class Shop extends Component{

	initialize_response = (a) => 
	{
		if(a==1){
			return(
				<Choice name = 'buy shirt' onClick={this.props.onClick}/>
			);
		}else if(a==2){
			return(
				<Choice name = 'buy shoes' onClick={this.props.onClick}/>
			);
		}else if(a==3){
			return(
				<Choice name = 'buy dress' onClick={this.props.onClick}/>
			);
		}else if(a==4){
			return(
				<Choice name = 'buy pants' onClick={this.props.onClick}/>
			);
		}

	}
	shop = () => {
		var shirt = "Shirt: $5";
		var shoes = "Shoes: $15";
		var dress = "Dress: $10";
		var pants = "Pants: $5";
		return(
			<div id="event-box">
				<p id="event-text">
				Welcome to shop!</p>
				<p id="event-text">{shirt}
				{this.initialize_response(1)}</p>
				<p id="event-text">{shoes}
				{this.initialize_response(2)}</p>
				<p id="event-text">{dress}
				{this.initialize_response(3)}</p>
				<p id="event-text">{pants}
				{this.initialize_response(4)}</p>
			</div>
		);

	}

	render(){
		return(
			this.shop()
			);
	}
	
	
}


export default Shop;
