import React, { Component } from 'react'
import Draggable from '../Draggable';

 class DraggableBoard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            x_: 0,
            y_: 1,
            w_: 1,
            h_: 1,
        }

        this.defineCoordinates = this.defineCoordinates.bind(this)
    }

    defineCoordinates(){
        var x = this.state.x_ + 1
        // var x = this.state.x_ + 1
        // var x = this.state.x_ + 1
        // var x = this.state.x_ + 1
        this.setState({x_: x})
        
    }

    render() {
        
    return (
        <Draggable id="draggable-bunches">
            { this.props.bunches.map(bunch => (
                                    <div key={bunch._id} data-grid={{x: this.state.x_, y: this.state.y_, w: this.state.w_, h: this.state.h_}}>
                                        <p>{bunch.title}</p>    
                                    </div>
                                ))                           
            }

        </Draggable>
    )
    }
    }
  

  export default DraggableBoard