import React, {Component} from 'react'
import ScheduleTable from '../ScheduleTable'
import SideBar from '../SideBar';


class Schedule extends Component {
    render() {
        return(
            <div>
                <SideBar/>
                <ScheduleTable />
            </div>
        )
    }
}

export default Schedule