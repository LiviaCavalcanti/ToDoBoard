import React, { Component } from 'react'

import api from '../../services/api'
import Activity from '../Activity'

export default class Bunch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            activities: []
        }
    }

    render() {
        const { title, description, activities } = this.state
        return (
            <div className="bunch-list">
                <div key={bunch._id}>
                <p>{title}</p>
                <p>{description}</p>
                <p>{activities.map( activity => (
                    <Activity>{activity}</Activity>
                ))}</p>
                <button onClick={this.addActivity}>Activity +</button>
                </div>
                
            </div>
        )
    }

    
}

