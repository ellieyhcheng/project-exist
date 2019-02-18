import React, { Component } from 'react';
import './Status.css';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
        this.updateLength = this.updateLength.bind(this);
    }

    componentDidMount() {
        this.updateLength();
    }

    componentWillUpdate(){
        this.updateLength();
    }

    componentDidUpdate(){
        this.updateLength();
    }

    updateLength = () => {
        var filler = this.refs.filler;
        var percent = this.props.percent;
        if (percent > 100)
            percent = 100;
        filler.style.width = percent + "%";
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
