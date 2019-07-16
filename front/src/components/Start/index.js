import React, { Component} from 'react'
import { withRouter} from 'react-router-dom';
import {ButtonGroup, Button} from 'react-bootstrap'

import './index.css'
import vanGoghFlowers from './teste.jpg';


class Start extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }
    render() {
      return (
      
        <div className='container'>
          <img src={vanGoghFlowers} alt="BackFlowers" className="backPaper"/>

          <div className="d-flex flex-column">
            <ButtonGroup size="lg" className='startButtons'>
              <Button className='startButton' onClick={() => this.nextPath('/schedule') }>Schedule</Button>
              <Button className='startButton' onClick={() => this.nextPath('/boards') }>Board</Button>
              <Button className='startButton' onClick={() => this.nextPath('/') }>Start</Button>
            </ButtonGroup>
          </div>

        </div>
      );
    }  
}
  
export default withRouter(Start)

// <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>