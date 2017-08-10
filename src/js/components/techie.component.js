import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const Techie = (props) => {
    console.log(props)
    return (
        <Link  to={`/details/${props.techie.id}`}>
            <div className="image-block">
                <img className="techie-img avatar" src={props.techie.avatar}>
                </img>
                <p> {props.techie.name} </p>
            </div>
        </Link>
    )
}

Techie.propTypes = {
   techie:PropTypes.object.isRequired
};
export default Techie
