import React, { Component } from 'react'

import api from '../../services/api'
import Bunch from '../Bunch'

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

    render() {
        return (
            <div className="bunch-list">
            <h1>Ola</h1>
            {console.log(this.state.bunches)}

                { this.state.bunches.map(bunch => (
                    <div key={bunch._id}>
                        <Bunch id={bunch._id} title={bunch.title} description={bunch.description} activity={bunch.activityBunch} >{ bunch }</Bunch>
                    </div>
                    
                )) }
            </div>
        )
    }
}