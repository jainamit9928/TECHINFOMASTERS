import React from 'react'
import ReactDOM from 'react-dom'
export default class Modal extends React.Component {
  close(e) {
    e.preventDefault()
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  render() {
    if (this.props.isOpen === false)
      return null
    return (
      <div className="overlay">
        <div className="popup">
          <h2>{this.props.header}</h2>
          <a className="close" onClick={e => this.close(e)}>&times;</a>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }


}
