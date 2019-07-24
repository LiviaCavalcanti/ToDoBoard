import React, {Component} from 'react'

 class Droppable extends Component {

    drop = (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData("transfer")
        e.target.appendChild(document.getElementById(data))
    }

    allowDrop = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} className="Drag">
                {this.props.children}
            </div>
        )
    }
 }

 export default Droppable