import React, {Component} from 'react'
import {  Table } from 'react-bootstrap'
import './index.css'
import Droppable from '../Droppable'
import api from '../../services/api';
import { throws } from 'assert';
import { async } from 'q';
class ScheduleTable extends Component{

    constructor(props) {
        super(props)

        this.state = {
            days:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            schedules:['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '18:00-20:00', '20:00-22:00', '22:00-00:00'],
            scheduledBunches: [],
            bunchNames: [],
            };
              
        
        this.loadScheduledBunches = this.loadScheduledBunches.bind(this)
        this.loadBunchesNames = this.loadBunchesNames.bind(this)
        this.getBunch = this.getBunch.bind(this)
        this.getBunchNameById = this.getBunchNameById.bind(this)
        
    }
          
    async componentDidMount() {  
        
        this.loadScheduledBunches();
        
    }
    
    
    loadScheduledBunches = async () => {
        const response = await api.get('/scheduledBunch')
    
        this.setState({ scheduledBunches: response.data })
        this.loadBunchesNames()
    }
 
    loadBunchesNames = async() => {
        let bunchNames = await this.state.scheduledBunches.map( ({bunchId}) =>  this.getBunchNameById(bunchId).then((result) => {
            return result}))

        
        this.setState({bunchNames: bunchNames})
        
    }

    getBunchNameById = async(bunchId) => {
        
        const response = await api.get('/bunch/' + bunchId)
        return {title: response.data.title, id: bunchId}
    }

    getBunch = async(bunchId) => {
        let bunch = await this.state.bunchNames.filter( bunch => {
                            
            return bunch.id === bunchId
        }) 

        return bunch.title
    }

    render = () => {
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
                        let bunchElement = this.state.scheduledBunches.filter( schBunch => {
                            
                            return schBunch.day === day && schBunch.startTime.substring(0,1) === hour.substring(0,1) 
                        })
                        if( bunchElement.length > 0) {
                            let bunchName = this.getBunch(bunchElement[0].bunchId)
                            
                            return <Droppable id={bunchElement._id}>
                                <p>bunchName</p>
                            </Droppable> 
                        }
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