import React, {Component} from 'react'
import {  Table } from 'react-bootstrap'
import './index.css'
import Droppable from '../Droppable'
import { throws } from 'assert';
class ScheduleTable extends Component{

    constructor(props) {
        super(props)

        this.state = {
            days:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            schedules:['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '18:00-20:00', '20:00-22:00', '22:00-00:00']
        }
    }
 
    render() {

        return(
            <Table  style={{top: this.props.top + "%"}}>
                <tr>
            <td/>
            {this.state.days.map(day =>(
                <th>{day}</th>
            ))}
            </tr>


            {this.state.schedules.map(hour =>(
                <tr>
                    <th>{hour}</th>
                    {this.state.days.map(day => {
                        let r = Math.random().toString(36).substring(7); // change later, just for testing
                       return <Droppable id={r}></Droppable>
                    })}
                </tr>
            ))}



                </Table>
        )
    }
}

export default ScheduleTable