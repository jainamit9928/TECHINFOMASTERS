import React from 'react'
import { Link } from 'react-router-dom'
class InputSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryParam: ""
        }
        this.onChange = this.onChange.bind(this)
        this.clearData = this.clearData.bind(this)
    }
    onChange(e) {
        this.setState({
            queryParam: e.target.value
        })
    }
    clearData() {
        this.setState({
            queryParam: ""
        })
    }
    
    render() {
        return (
            <div className="form-inline">
                <div className="form-group has-feedback">
                    <input type="text" className="form-control" value={this.state.queryParam} onChange={this.onChange}></input>
                    {this.state.queryParam && <span className="glypho" onClick={this.clearData}>x</span>}
                </div>
                <Link  to={`/search/${this.state.queryParam}`}><input  type="button"  className="btn btn-info" value="Search" /></Link>
            </div>
        )
    }
}

export default InputSearch