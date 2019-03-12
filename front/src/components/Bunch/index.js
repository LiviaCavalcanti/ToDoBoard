import React, { Component } from 'react'

import api from '../../services/api'
import Activity from '../Activity'

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
        const response = await api.get('/bunch')



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
                    <p>{bunch.activityBunch.map( activity => (
                        <Activity>{activity}</Activity>
                    ))}</p>
                    </div>
                    
            )) }
            </div>
        )
    }
}

