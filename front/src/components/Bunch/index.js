import React, { Component } from 'react'
import { DropdownButton, Dropdown, Form, Button, Modal } from 'react-bootstrap'

import Activity from '../Activity'
import api from '../../services/api';


export default class Bunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddActivityModal: false,
            newActivityTitle: "",
            newBunchDescription: ""
        }

        // this.handleUpdate = this.handleUpdate.bind(this)
        this.handleAddActivityClose = this.handleAddActivityClose.bind(this)
        this.handleAddActivityShow = this.handleAddActivityShow.bind(this)
    }


    // handleUpdate = async (newActivity) => {
    //     const activityId = this.state.bunches.findIndex(( bunch => bunch.id == newActivity.id))
    //     const bunches = [...this.state.bunches]
    //     bunches[activityId] = newActivity
    //     this.setState({bunches})

    // }

    handleAddActivity = async () => {
        const newActivity = {
            title: this.state.newActivityTitle,
            description: this.state.newBunchDescription
        }

        await api.post(`/activity/${this.props.id}`, newActivity)

        this.setState({showEditModal:false})
    }

    handleAddActivityClose() {
        this.setState({ showAddActivityModal: false });
    }
    
      handleAddActivityShow() {
        this.setState({ showAddActivityModal: true });
    }

      handleChangeTitle = (e) =>{
        this.setState({newActivityTitle: e.target.value})
    }

    handleChangeDescription = (e) =>{
        this.setState({newBunchDescription: e.target.value})
    }

    render() {
        return (
            <div className="bunch">
                     <Button  onClick={this.handleAddActivityShow}>
                        +
                    </Button>

                    <Modal show={this.state.showAddActivityModal} onHide={this.handleAddActivityClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar atividade</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" placeholder="Titulo da atividade" onChange={this.handleChangeTitle} />
                                    

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type="text" placeholder="Descrição da atividade" onChange={this.handleChangeDescription} />
                                </Form.Group>

                                
                                <Button variant="primary" type="submit" onClick={this.handleAddActivity}>
                                    Criar
                                </Button>
                            </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleAddActivityClose}>
                        Close
                        </Button>

                    </Modal.Footer>
                    </Modal>

                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    {this.props.activityBunch.map( activity => (
                        <div key={activity._id}>
                        <Activity title={activity.title} description={activity.description} id={activity._id}/>
                        </div>
                    ))}
                
            </div>
        )
    }

}

