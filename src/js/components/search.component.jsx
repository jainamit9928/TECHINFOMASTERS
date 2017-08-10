import React from 'react'
import InputSearch from './inputsearch.component'
import {getData} from '../apis/api'
import VisibleTechieList from './visibletechielist.component'
import ErrorComponent from './showerror.component'
export default class Search extends React.Component{
    constructor(props){
        super(props) 
        this.apiUrl = "/public/assets/db.json"
        this.state = {
            techies:[],
            searchTerm:"",
            dataNotFetched:false
        }
    }
    componentDidMount () {
        getData().then(techies => {
            this.setState({techies:techies,searchTerm:this.props.match.params.id})
        },error => {
            this.setState({dataNotFetched:true})
        })
    }
    componentWillReceiveProps (nextProps) {
         this.setState({searchTerm:nextProps.match.params.id})
    }
    render(){
        return(
          <div className="component-block">
               <ErrorComponent dataNotFetched={this.state.dataNotFetched} />
                <div className="col-md-12">
                <InputSearch />
                 <VisibleTechieList queryParam={this.state.searchTerm} techies = {this.state.techies} /> 
                   </div>
            </div>
       )
    }
    
    
}
