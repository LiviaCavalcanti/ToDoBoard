import React, { Component } from 'react'

import api from '../../services/api'
import Activity from '../Bunch'

export default class Board extends Component {
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

    onClick = () => {
        this.Bunch.addActivity()
    }

    render() {
        return (
            <div className="bunch-list">
            <h1>Ola</h1>

                { this.state.bunches.map(bunch => (
                    <div key={bunch._id}>
                        <Bunch>{ bunch }</Bunch>
                    </div>
                    
                )) }
            </div>
        )
    }
}