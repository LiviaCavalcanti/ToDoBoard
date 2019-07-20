import React, { Component } from 'react';
import { Collapse, Button,  Card } from 'react-bootstrap';
import Bunch from '../Bunch'

import api from '../../services/api';

class CollapsedBoard extends Component {
  constructor(props) {
    super(props);
    
    // Initial state
    this.state = { open: false,
      bunches: []
    };
    
    this.toggle=this.toggle.bind(this)
    this.loadBunches = this.loadBunches.bind(this)
  }

  componentDidMount() {
    this.loadBunches();
  }

   toggle() {
    // this.props.tableTop = 30;
    this.props.onChange()
    this.setState({
      open: !this.state.open
    });
  }

  loadBunches = async () => {
    const response = await api.get('/bunch')

    this.setState({ bunches: response.data })
  }


render(){
  return(
    <div className= "container">
       <Button className="btn" onClick={this.toggle} className='collapseBottom'  >
           Collapse Div
       </Button>

       <Collapse in={this.state.open} >
           <div className= "content">
             <Card>
              <p >Content when the button is clicked</p>
              <p >Content when the button is clicked</p>
              <p >Content when the button is clicked</p>
              <p >Content when the button is clicked</p>
              <p >Content when the button is clicked</p>
              <p >Content when the button is clicked</p>
              { this.state.bunches.map(bunch => (
                                    <div key={bunch._id}>
                                      <p>{bunch.title}</p>    
                                    </div>
                                ))                           
                            }
             </Card>           
           </div>
       </Collapse>
    </div>
    );
   }
}

export default CollapsedBoard;