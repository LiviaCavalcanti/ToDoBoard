import React, { Component } from 'react'

export default class Activity extends Component {
    render() {
        return (
            <div className="activity">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}