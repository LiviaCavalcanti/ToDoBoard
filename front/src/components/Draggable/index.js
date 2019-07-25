import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'

 class Draggable extends Component {

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id)
        
    }

    noAllowDrop = (e) => {
        e.stopPropagation()
    }

    render() {
        return (
            <div id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
                {this.props.children}
            </div>
        )
    }
 }

 export default Draggable

 Draggable.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
}