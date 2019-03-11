import React, { Component } from 'react'

import api from '../services/api'

export default class Bunch extends Component {

    constructor(props){
        super(props)
        this.state = {
            bunches: []
        }

        this.loadBunches = this.loadBunches.bind(this)
    }

    componentDidMount() {
        this.loadBunches();
    }

    loadBunches = async () => {
        const response = await api.get('/')



        this.setState({ bunches: response.data})
    }

    render() {
        return (
            <div className="bunch-list">
            <h1>Ola</h1>

                          { this.state.bunches.map(bunch => (
                              <div key={bunch._id}>
                              <p>{bunch.title}</p>
                              <p>{bunch.description}</p>
                              </div>
            )) }
            </div>
        )
    }
}

