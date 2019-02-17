import React, { Component } from 'react';
import './Status.css';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: this.props.percent,
            name: this.props.name,
        }
    }

    componentDidMount() {
        this.updateLength();
    }

    updateLength = () => {
        var filler = this.refs.filler;
        filler.style.width = this.state.percent;
    }

    render() {
        return (
            <div id="status-wrapper">
                <p>{this.state.name}</p>
                <div id="bar">
                    <div id="filler" ref="filler"></div>
                </div>
            </div>
        );
    }
}

export default Status;
