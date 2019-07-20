import React, { Component } from 'react'
import {  Form, Button, Modal, Card, ButtonGroup } from 'react-bootstrap'

import Activity from '../Activity'
import api from '../../services/api';
import './style.css'

import garbageImg from './images/garbage.svg'

export default class Bunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddActivityModal: false,
            newActivityTitle: "",
            newActivityDescription: "",
            newActivityStatus: "To Do",
            activities: this.props.activityBunch,
        }

        this.handleAddActivityClose = this.handleAddActivityClose.bind(this)
        this.handleAddActivityShow = this.handleAddActivityShow.bind(this)
        this.deleteActivity = this.deleteActivity.bind(this)
    }


    handleAddActivity = async () => {
        const newActivity = {
            title: this.state.newActivityTitle,
            description: this.state.newActivityDescription,
            status: this.state.newActivityStatus,
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

    handleChangeActivityToDo = () => {
        
        this.setState({ newActivityStatus: "To Do" })
        
    }

    handleChangeActivityFinished = () => {
        this.setState({ newActivityStatus: "Finished" })
    }


    handleChangeActivityDoing = () => {
        this.setState({ newActivityStatus: "In Progress" })
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
        this.setState({activities: activitiesCopy})

        await api.delete(`/activity/${activityId}`)

    }
    

    render() {
        return (
            <div >
                    
                <Card className="bunch">
                    <div>
                        {/* <img src={addImg} alt="scheduleIcon" className='addIcon' onClick={this.handleAddActivityShow}/> */}
                        
                        <h4 className='bunchTitle'>{this.props.title}</h4>
                        <Button  className='addButton' onClick={this.handleAddActivityShow}> + </Button>
                    </div>
                
                    {/* <p>{this.props.description}</p> */}
                    {this.state.activities.map( activity => (
                        <div key={activity._id}>
                            <Card.Body className="activity">
                                <Activity title={activity.title} description={activity.description} id={activity._id} status={activity.status}/>
                                <img src={garbageImg} alt="scheduleIcon" className='activityIconsDelete' onClick={() => this.deleteActivity(activity._id)}/>
                            </Card.Body>
                        </div>
                    ))}
                    
                </Card>

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

                                <ButtonGroup size="sm" className="mt-3">
                                    <Button onClick={this.handleChangeActivityToDo}>To Do</Button>
                                    <Button onClick={this.handleChangeActivityDoing}>In Progress</Button>
                                    <Button onClick={this.handleChangeActivityFinished}>Finished</Button>
                                </ButtonGroup>
                            
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
                
            </div>
        )
    }

}
