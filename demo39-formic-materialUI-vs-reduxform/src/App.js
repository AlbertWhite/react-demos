import React, { Component } from 'react'
import ReduxFormExample from './formContainer/reduxForm'
import FormikExample from './formContainer/formik/index'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-left">
          {<ReduxFormExample dispatch={this.props.dispatch} />}
        </div>
        <div className="app-right">
          <FormikExample dispatch={this.props.dispatch} />
        </div>
      </div>
    )
  }
}

export default App
