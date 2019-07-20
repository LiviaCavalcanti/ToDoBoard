import React, { Component } from 'react'
import api from '../../services/api';

import {  Form, Button, Modal, ButtonGroup, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import editImg from './images/edit.svg'


export default class Activity extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleFormShow = this.handleFormShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.editActivity = this.editActivity.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeActivityToDo = this.handleChangeActivityToDo.bind(this);
        this.handleChangeActivityFinished = this.handleChangeActivityFinished.bind(this);
        this.handleChangeActivityDoing = this.handleChangeActivityDoing.bind(this);

        this.state = {
        showEditModal: false,
        showDeleteModal: false,
        newTitle: this.props.title,
        newDescription: this.props.description,
        newStatus: this.props.status,
        };
      }
    
      handleClose() {
        this.setState({ showEditModal: false });
      }
    
      handleFormShow() {
        this.setState({ showEditModal: true });
      }

      handleModalClose() {
        this.setState({ showDeleteModal: false });
      }
    
      handleModalShow() {
        this.setState({ showDeleteModal: true });
      }

     
    
    editActivity = async () => {
        const newActivity = {
            title: this.state.newTitle,
            description: this.state.newDescription,
            status: this.state.newStatus
        }
        
        await api.put(`/activity/${this.props.id}`, newActivity)
        
        this.setState({showEditModal:false})

    }
		
    handleChangeActivityToDo = () => {
        
        this.setState({ newStatus: "To Do" })
        
    }

    handleChangeActivityFinished = () => {
        this.setState({ newStatus: "Finished" })
    }


    handleChangeActivityDoing = () => {
        this.setState({ newStatus: "In Progress" })
    }

    handleChangeTitle = (e) =>{
        this.setState({newTitle: e.target.value})
    }

    handleChangeDescription = (e) =>{
        this.setState({newDescription: e.target.value})
    }


    render() {
        let alertVariant = this.props.status === "To Do" ? "success" : this.props.status === "Finished" ? "secundary" : "primary"
        return (
            <div >
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <Alert className='statusAlert' variant = {alertVariant} >{this.props.status}</Alert>
                <img src={editImg} alt="editIcon" className='activityIconsEdit' onClick={this.handleFormShow}/>

                <Modal show={this.state.showEditModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar atividade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" placeholder={this.props.title} onChange={this.handleChangeTitle} />
                                

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder={this.props.description} onChange={this.handleChangeDescription} />
                                <ButtonGroup size="sm" className="mt-3">
                                    <Button onClick={this.handleChangeActivityToDo}>To Do</Button>
                                    <Button onClick={this.handleChangeActivityDoing}>In Progress</Button>
                                    <Button onClick={this.handleChangeActivityFinished}>Finished</Button>
                                </ButtonGroup>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.editActivity}>
                                Salvar
                            </Button>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>

                </Modal.Footer>
                </Modal>

            </div>
        )
    }
}