import React, { Component } from 'react';
import MyModal from './modal'
import ui from 'redux-ui'

class App extends Component {

	showModal(){
		//set ui props
		this.props.updateUI({
			modalIsVisiable: true
		})
	}

	closeModal(){
		this.props.updateUI({
			modalIsVisiable: false
		})	
	}

  render() {
    return (
      <div className="App">
      	{/*get ui props*/}
      	<MyModal modalIsVisiable={this.props.ui.modalIsVisiable} closeModal={this.closeModal.bind(this)}/>
      	<button onClick={() => this.showModal()}>show modal</button>
      

      	{true && (<div>hello world</div>)}
      </div>

    );
  }
}

//step2: wrap component with UI wrapper, pass UI parameters in the state object as the parameter
const AppWithUI = ui({
	state:{
		modalIsVisiable: false
	}
})(App)

export default AppWithUI;
