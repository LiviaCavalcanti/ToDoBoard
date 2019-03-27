import React, { Component } from 'react'

import Activity from '../Activity'

export default class Bunch extends Component {


    render() {
        return (
            <div className="bunch">
                
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    {this.props.activityBunch.map( activity => (
                        <div key={activity._id}>
                        <Activity title={activity.title} description={activity.description} id={activity._id}/>
                        </div>
                    ))}
                
            </div>
        )
    }

}

