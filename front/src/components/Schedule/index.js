import React, {Component} from 'react'
import ScheduleTable from '../ScheduleTable'
import SideBar from '../SideBar';
import CollapsedBoard from '../CollapsedBoard'
import './index.css'

class Schedule extends Component {
    render() {
        return(
            <div className='schedule'>
                <div className='bar'>
                <SideBar />
                </div>
                              
                <ScheduleTable/>
                <CollapsedBoard className='collapse'/>
            </div>
        )
    }
}

export default Schedule