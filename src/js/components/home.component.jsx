import React from 'react'
import Techie from './techie.component.js'
import InputSearch from './inputsearch.component'
import { getData, postData } from '../apis/api'
import ErrorComponent from './showerror.component'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            techies: [],
            dataNotFetched: false
        }
    }

    componentDidMount() {
        getData().then(techies => {
            this.setState({ techies })
        }, error => {
            this.setState({ dataNotFetched: true })
        })
    }

    render() {

        return (
            <div className="component-block">
                <ErrorComponent dataNotFetched={this.state.dataNotFetched} />
                <div className="col-md-12">
                    <InputSearch />
                    {this.state.techies.map((techie) => (
                        <Techie key={techie.id} techie={techie} />

                    ))}
                </div>
            </div>
        )
    }


}