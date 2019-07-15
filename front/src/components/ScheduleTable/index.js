import React, {Component} from 'react'
import {  Table } from 'react-bootstrap'
import './index.css'

class ScheduleTable extends Component{
    render() {
        return(
            <Table responsive striped hover >
                <thead>
                    <tr>
                    <th> </th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>08:00-10:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <td>10:00-12:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <td>12:00-14:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <td>14:00-16:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <td>16:00-18:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <td>18:00-20:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>  
                    </tr>
                    <tr>
                    <td>20:00-22:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <td>22:00-24:00</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    </tr>
                </tbody>
                </Table>
        )
    }
}

export default ScheduleTable