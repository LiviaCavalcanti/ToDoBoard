import React, { Component } from 'react';
import { Collapse, Button,  Card } from 'react-bootstrap';

class CollapsedBoard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} className='collapseBottom'>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CollapsedBoard;