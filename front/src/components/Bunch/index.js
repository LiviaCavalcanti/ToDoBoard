import React, { Component } from 'react'

import Activity from '../Activity'

export default class Bunch extends Component {


    render() {
        return (
            <div className="bunch">
                
                    <p>{this.props.title}</p>
                    <p>{this.props.description}</p>
                    <p>{this.props.activityBunch.map( activity => (
                        <Activity title={activity.title} description={activity.description}/>
                    ))}</p>
                
            </div>
        )
    }

}

