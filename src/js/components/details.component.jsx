import React from 'react'
import { getData, getVisibleTechies, updateData } from '../apis/api'
import PropTypes from 'prop-types'
import Modal from './modal.component.jsx'
import ErrorComponent from './showerror.component'
import TechieInfoEdit from './techieinfoedit.component'
import TechiInfo from './techieinfo.component'
class TechieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techies: [],
            searchTerm: "",
            isModalOpen: false,
            dataNotFetched: false,
            techie: {},
            filteredTechie:{}
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.setError = this.setError.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }
     onUpdate() {
        updateData(this.state.techie.id, this.state.techie).then((resp) => {
        this.closeModal();
             this.setState({filteredTechie:Object.assign({},this.state.techie)})
             window.location.reload();
        }, error => {
           this.closeModal();
           this.setError();
        })
    }

    onChange(e) {
        let temp = this.state.techie
        let key = e.target.name
        temp[key] = e.target.value
        this.setState({ techie: temp })
    }
    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false, techie:Object.assign({},this.state.filteredTechie)})
    }
    setError() {
        this.setState({ dataNotFetched: true })
    }
    componentDidMount() {
        getData().then(techies => {
            let filteredTechieArray = getVisibleTechies(techies, this.props.match.params.id);
            this.setState({ techies: Object.assign({},techies), techie: Object.assign({},filteredTechieArray[0]), searchTerm: this.props.match.params.id })
            this.setState({filteredTechie:Object.assign({},filteredTechieArray[0])})
        }, error => {
            this.setError()
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ searchTerm: nextProps.match.params.id })
    }

    render() {
        return (
            <div>
                <ErrorComponent dataNotFetched={this.state.dataNotFetched} />
                {
                    this.state.techie && (
                        <div>
                            <TechiInfo techie={this.state.filteredTechie} dataNotFetched={this.state.dataNotFetched} />
                            <button type="button" className="btn btn-info col-md-offset-5" value="edit" onClick={() => this.openModal()}>Edit</button>
                            <Modal header="Techie Details" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                                <TechieInfoEdit onChange={this.onChange} techie={this.state.techie} onUpdate = {this.onUpdate} onClose={this.closeModal} />
                            </Modal>
                        </div>
                    )
                }
            </div>

        )
    }

}


export default TechieDetails
