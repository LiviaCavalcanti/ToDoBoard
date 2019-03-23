import React, { Component } from 'react'

export default class Activity extends Component {
    render() {
        return (
            <div className="product-info">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}