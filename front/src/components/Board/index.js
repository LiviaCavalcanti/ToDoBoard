import React, { Component } from 'react'
import api from '../../services/api';

import Bunch from '../Bunch'
import '../Bunch/style.css'

import { DropdownButton, Dropdown, Form, Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HorizontalLayout,
    VerticalLayout,
    Panel,
    Separator,
    Spacer,
    View } from "nice-react-layout";

export default class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAddActivityModal: false,
            bunches: [],
            newActivityTitle: "",
            newActivityDescription: ""
        }

        this.loadBunches = this.loadBunches.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleAddActivityClose = this.handleAddActivityClose.bind(this)
        this.handleAddActivityShow = this.handleAddActivityShow.bind(this)
    }

    componentDidMount() {
        this.loadBunches();
    }
    
    loadBunches = async () => {
        const response = await api.get('/bunch')

        this.setState({ bunches: response.data })
    }

    handleUpdate = async (newActivity) => {
        const activityId = this.state.bunches.findIndex(( bunch => bunch.id == newActivity.id))
        const bunches = [...this.state.bunches]
        bunches[activityId] = newActivity
        this.setState({bunches})

    }

    handleAddActivity = async () => {
        const newActivity = {
            title: this.state.newActivityTitle,
            description: this.state.newActivityDescription
        }

        await api.post(`/activity/${this.state.bunchID}`, newActivity)

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
        this.setState({newActivityDescription: e.target.value})
    }

    render() {
        return (
            <div>
                <VerticalLayout>
                    <Panel>
                        <div className='board'>
                        <HorizontalLayout>
                            { this.state.bunches.map(bunch => (
                                    <div key={bunch._id}>
                                    <Panel>
                                        <Bunch title={bunch.title} description={bunch.description} activityBunch={bunch.activityBunch} updatingActivity={this.handleUpdate}/>
                                    </Panel>
                                    </div>
                                ))
                            }
                        </HorizontalLayout>    
                        
                        </div>
                    </Panel>
                </VerticalLayout>

                <Button  onClick={this.handleAddActivityShow}>
                    Adicionar Atividade
                </Button>

                <Modal show={this.state.showAddActivityModal} onHide={this.handleAddActivityClose}>
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
                            <DropdownButton>
                                {this.state.bunches.map(
                                    bunchItem => (
                                        <Dropdown.Item eventKey={bunchItem.id}>
                                            {bunchItem.title}                                            
                                        </Dropdown.Item>

                                ))}

                            </DropdownButton>
                            
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