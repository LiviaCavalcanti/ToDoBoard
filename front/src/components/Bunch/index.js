import React, { Component } from 'react'
import {  Form, Button, Modal } from 'react-bootstrap'

import Activity from '../Activity'
import api from '../../services/api';
import './style.css'

export default class Bunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddActivityModal: false,
            newActivityTitle: "",
            newActivityDescription: "",
            activities: this.props.activityBunch
        }

        this.handleAddActivityClose = this.handleAddActivityClose.bind(this)
        this.handleAddActivityShow = this.handleAddActivityShow.bind(this)
        this.deleteActivity = this.deleteActivity.bind(this)
    }


    handleAddActivity = async () => {
        const newActivity = {
            title: this.state.newActivityTitle,
            description: this.state.newActivityDescription
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

    deleteActivity = async (activityId) => {
        
        let activitiesCopy = this.state.activities.slice()
        // codigo extremamente seboso abaixo
        for(let i = 0; i < activitiesCopy.length; i++) {
            if(activitiesCopy[i]._id === activityId){
                activitiesCopy.splice(i,1)
                break   
            }
        }

        console.log(activitiesCopy)

        this.setState({activities: activitiesCopy})

        await api.delete(`/activity/${activityId}`)

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
                    {this.state.activities.map( activity => (
                        <div key={activity._id}>
                        <Activity title={activity.title} description={activity.description} id={activity._id}/>
                            <Button onClick={() => this.deleteActivity(activity._id)}>Delete example</Button>

                {/* <Modal show={this.state.showDeleteModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Apagar Atividade</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Tem certeza que deseja apagar a atividade?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>Cancelar</Button>
                        <Button variant="primary" onClick={this.deleteActivity}>Apagar</Button>
                    </Modal.Footer>
                </Modal> */}
                        </div>
                    ))}
                
            </div>
        )
    }

}
