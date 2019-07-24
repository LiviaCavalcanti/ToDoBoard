import React, {Component} from 'react'
import ScheduleTable from '../ScheduleTable'
import SideBar from '../SideBar';
import CollapsedBoard from '../CollapsedBoard'
import './index.css'

class Schedule extends Component {
    constructor() {
        super()
        this.state = {
            tableTop: 20,
        }
        this.changeTableTop = this.changeTableTop.bind(this)
    }

    changeTableTop = async (event) => {
        var newValue = this.state.tableTop === 20 ? 40: 20
        this.setState({tableTop: newValue})
    }
    
    render() {
        var topValue=this.state.tableTop
        return(
            <div className='schedule'>
                {/* <div className='bar'>
                <SideBar />
                </div> */}
                              
                <ScheduleTable top={topValue}/>
                <CollapsedBoard tableTop={this.state.tableTop} onChange={this.changeTableTop}className='collapse'/>
            </div>
        )
    }
}

export default Schedule