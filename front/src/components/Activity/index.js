import React, { Component } from 'react'

import api from '../../services/api'

export default class Activity extends Component {
    state = {
        activity: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get('/activity/${id}')

        this.setState({ activity: response.data })
    }

    render() {
        const { activity } = this.state

        return (
            <div className="product-info">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
            </div>
        )
    }
}