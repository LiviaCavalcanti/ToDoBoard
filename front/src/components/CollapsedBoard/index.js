import React, { Component } from 'react';
import { Collapse, Button,  Card } from 'react-bootstrap';

class CollapsedBoard extends Component {
  constructor() {
    super();
    
    // Initial state
    this.state = { open: false };
    this.toggle=this.toggle.bind(this)
  }

   toggle() {
    this.setState({
      open: !this.state.open
    });
  }
render(){
  return(
    <div className= "container">
       <Button className="btn" onClick={this.toggle} className='collapseBottom'>
           Collapse Div
       </Button>

       <Collapse in={this.state.open} >
           <div className= "content">
              <p >Content when the button is clicked</p>
           </div>
       </Collapse>
    </div>
    );
   }
}

export default CollapsedBoard;