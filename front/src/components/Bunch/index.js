import React, { Component } from 'react'

import api from '../../services/api'
import Activity from '../Activity'

export default class Bunch extends Component {

    constructor(props) {
        super(props)
        this.addActivity = this.addActivity.bind(this)
    }
// Tirei o async por enquanto
    addActivity =  (id) => {
        console.log(id)
    }


    render() {
        return (
            <div className="bunch-list">

                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.activity.map( activity => (
                    <Activity>{activity}</Activity>
                ))}</p>
                <button onClick={(e) => {this.addActivity(this.props.id, e)}}>Activity +</button>
            </div>
        )
    }

    
}

