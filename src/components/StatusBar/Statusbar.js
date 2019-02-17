import React, { Component } from 'react';
import './StatusBar.css';
import Status from "../Status/Status.js";

class StatusBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            intelligence: this.props.intelligence,
            health: this.props.health,
            happiness: this.props.happiness,
            attractiveness: this.props.attractiveness,
            wealth: this.props.wealth
        }
    }

    render() {
        return (
            <div id="status-bar-wrapper">
                <div id="status-bar">
                    <Status name="Intelligence" percent={this.state.intelligence + "%"}></Status>
                    <Status name="Health" percent={this.state.health + "%"}></Status>
                    <Status name="Happiness" percent={this.state.happiness + "%"}></Status>
                    <Status name="Attractiveness" percent={this.state.attractiveness + "%"}></Status>
                    <Status name="Wealth" percent={this.state.wealth + "%"}></Status>
                </div>
            </div>
        );
    }
}

export default StatusBar;
