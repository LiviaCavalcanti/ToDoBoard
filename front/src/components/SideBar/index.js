import React, {Component} from "react"
import { Link, Route, BrowserRouter, Switch, withRouter} from 'react-router-dom';

import './index.css'
import Schedule from '../Schedule'

class SideBar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link to='./boards'>Board</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/planning'>Schedule</Link>
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

