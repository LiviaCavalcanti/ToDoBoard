import React, { Component } from 'react'
import api from '../../services/api';

import { DropdownButton, Dropdown, Form, Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Activity extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleFormShow = this.handleFormShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.editActivity = this.editActivity.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);



        this.state = {
          show: false,
          newTitle: "",
          newDescription: ""
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleFormShow() {
        this.setState({ show: true });
      }
    
    editActivity = async () => {
       
        const newActivity = {
            title: this.state.newTitle,
            description: this.state.newDescription
        }

        await api.put(`/activity/${this.props.id}`, newActivity)

        this.setState({show:false})

    }

    handleChangeTitle = (e) =>{
        this.setState({newTitle: e.target.value})
    }

    handleChangeDescription = (e) =>{
        this.setState({newDescription: e.target.value})
    }


    render() {
        return (
            <div className="activity">

             <>
                <DropdownButton title='...' variant="primary" >
                    <Dropdown.Item onClick={this.handleFormShow}>Editar atividade</Dropdown.Item>
                    {/* <Dropdown.Item onClick={this.handleFormShow}>Editar atividade</Dropdown.Item> */}
                </DropdownButton>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar atividade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" placeholder="Titulo da atividade" onChange={this.handleChangeTitle} />
                                

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Descrição da atividade" onChange={this.handleChangeDescription} />
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
            </>

                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}