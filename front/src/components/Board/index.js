import React, { Component } from 'react'
import api from '../../services/api';

import Bunch from '../Bunch'
import '../Bunch/style.css'

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
            bunches: []
        }

        this.loadBunches = this.loadBunches.bind(this)
    }

    componentDidMount() {
        this.loadBunches();
    }
    
    loadBunches = async () => {
        const response = await api.get('/bunch')

        this.setState({ bunches: response.data })
    }

    render() {
        return (
            <VerticalLayout>
                <Panel>
                    <div className='bunch-list'>
                    <HorizontalLayout>
                        { this.state.bunches.map(bunch => (
                                <div key={bunch._id}>
                                <Panel>
                                    <Bunch title={bunch.title} description={bunch.description} activityBunch={bunch.activityBunch}/>
                                </Panel>
                                </div>
                            ))
                        }
                    </HorizontalLayout>    
                    
                    </div>
                </Panel>
            </VerticalLayout>
        )
    }
}