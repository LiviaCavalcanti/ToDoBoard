import React, {Component} from "react"
import { Link} from 'react-router-dom';

import './index.css'

class SideBar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link to='./boards'>Board</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/schedule'>Schedule</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/'>Start</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar

