import React, { Component } from 'react';
import './StatusBar.css';
import Status from "../Status/Status";

class StatusBar extends Component {
    render() {
        
        const status = this.props.status;
        
        return (
            <div id="status-bar-wrapper">
                <div id="status-bar">
                    <Status name="Intelligence" percent={status.intelligence + "%"}></Status>
                    <Status name="Health" percent={status.health + "%"}></Status>
                    <Status name="Happiness" percent={status.happiness + "%"}></Status>
                    <Status name="Attractiveness" percent={status.attractiveness + "%"}></Status>
                    <Status name="Wealth" percent={status.wealth + "%"}></Status>
                </div>
            </div>
        );
    }
}

export default StatusBar;
