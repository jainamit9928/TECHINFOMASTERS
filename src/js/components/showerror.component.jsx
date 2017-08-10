import React from 'react'
const ErrorComponent = (props) => {
    if (props.noDataFound) {
        return (
            <div className="alert alert-info">
                <strong>No Data Found!</strong> Please Search Again.
            </div>
        )
    }
    else if (props.dataNotFetched) {
        return (
            <div className="alert alert-danger">
            <strong>Something Went Wrong!</strong> Please try again.
            </div>
        )
       
    }
    else if (props.info) {
        return (
        <div className="alert alert-info">
            <strong>Please Search Here!</strong>
         </div>
        )
    }
    return null
}
export default ErrorComponent