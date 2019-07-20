import React, { Component} from 'react'
import { withRouter} from 'react-router-dom';
import {Card} from 'react-bootstrap'

import './index.css'
import SideBar from '../SideBar'

class Start extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }
    render() {
      return (
      
        <div className='startPanel'>


          <SideBar/>
          <Card>

          </Card>
         </div>
      );
    }  
}
  
export default withRouter(Start)

// <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>