import React, {Component} from "react"
import { Link} from 'react-router-dom';

import './index.css'
import boardImg from './images/board.svg'
import planImg from './images/planning.svg'
import scheduleImg from './images/schedule.svg'

class SideBar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <img src={boardImg} alt="boardIcon" className='icons'/>
                        <Link to='./boards' className='navLink'>Board</Link>
                    </li>
                    <li className="nav-item">
                        <img src={planImg} alt="planIcon" className='icons'/>
                        <Link to='/schedule' className='navLink'>Schedule</Link>
                    </li>
                    <li className="nav-item">
                        <img src={scheduleImg} alt="scheduleIcon" className='icons'/>
                        <Link to='/' className='navLink'>Start</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar

