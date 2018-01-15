import React, { Component } from 'react'
import Modal from 'react-modal'

class MyModal extends Component{

	render(){
		return (
			<Modal isOpen={this.props.modalIsVisiable}>
				<button onClick={this.props.closeModal}>close</button>
				this is my modal
			</Modal>
		)
	}
}

export default MyModal