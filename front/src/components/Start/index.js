import React, { Component} from 'react'
import { withRouter} from 'react-router-dom';
import {ButtonGroup, Button} from 'react-bootstrap'


import './index.css'
import vanGoghFlowers from './teste.jpg';


class Start extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }
    // Import result is the URL of your image
    render() {
      return (
      
        <div>
          <img src={vanGoghFlowers} alt="BackFlowers" className="backPaper"/>

          <div className="d-flex flex-column">
            <ButtonGroup size="lg">
              <Button onClick={() => this.nextPath('/schedule') }>Schedule</Button>
              <Button onClick={() => this.nextPath('/boards') }>Board</Button>
              <Button onClick={() => this.nextPath('/') }>Start</Button>
          </ButtonGroup>
          </div>

        </div>
      );
    }  
}
  
export default withRouter(Start)