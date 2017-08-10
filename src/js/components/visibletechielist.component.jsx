import React from 'react'
import { getVisibleTechies } from '../apis/api'
import Techie from './techie.component.js'
import PropTypes from 'prop-types'
import ErrorComponent from './showerror.component'

const VisibleTechieList = (props) => {
    var filteredTechies = getVisibleTechies(props.techies, props.queryParam);
    let noData =false;
    if(props.queryParam != "data" && !filteredTechies.length > 0){
        noData =true
    }
    return (
        <div>
            {filteredTechies.length>0 ?(filteredTechies.map(techie => <Techie key={techie.id} techie={techie} />)):(<ErrorComponent  noDataFound={ noData } />) }
        </div>
    )

}

VisibleTechieList.propTypes = {
   queryParam:PropTypes.string.isRequired,
   techies:PropTypes.array.isRequired
};
export default VisibleTechieList