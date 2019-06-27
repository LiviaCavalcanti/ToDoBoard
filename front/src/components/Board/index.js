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
            showAddBunchModal: false,
            bunches: [],
            newBunchTitle: "",
            newBunchDescription: ""
        }

        this.loadBunches = this.loadBunches.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleAddBunchClose = this.handleAddBunchClose.bind(this)
        this.handleAddBunchShow = this.handleAddBunchShow.bind(this)
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

    handleAddBunch = async () => {
        const newBunch = {
            title: this.state.newBunchTitle,
            description: this.state.newBunchDescription
        }

        await api.post('/bunch/', newBunch)

        this.setState({showEditModal:false})
    }

    handleAddBunchClose() {
        this.setState({ showAddBunchModal: false });
    }
    
      handleAddBunchShow() {
        this.setState({ showAddBunchModal: true });
    }

      handleChangeTitle = (e) =>{
        this.setState({newBunchTitle: e.target.value})
    }

    handleChangeDescription = (e) =>{
        this.setState({newBunchDescription: e.target.value})
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

                <Button  onClick={this.handleAddBunchShow}>
                    Adicionar Bunch
                </Button>

                <Modal show={this.state.showAddBunchModal} onHide={this.handleAddBunchClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar atividade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" placeholder="Titulo do bunch" onChange={this.handleChangeTitle} />
                                

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Descrição do bunch" onChange={this.handleChangeDescription} />
                            </Form.Group>

                            
                            <Button variant="primary" type="submit" onClick={this.handleAddBunch}>
                                Criar
                            </Button>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleAddBunchClose}>
                    Close
                    </Button>

                </Modal.Footer>
                </Modal>


            </div>
            
        )
    }
}