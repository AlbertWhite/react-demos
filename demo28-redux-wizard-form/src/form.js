import React, { Component } from 'react';
import PropTypes from 'prop-types'
import FormFirstPage from './formFirstPage'
import FormSecondPage from './formSecondPage'
import FormThirdPage from './formThirdPage'
import ui from 'redux-ui'

class Form extends Component {

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)

  }
  nextPage() {
    this.props.updateUI({
      page: this.props.ui.page + 1
    })  
  }

  previousPage() {
    this.props.updateUI({
      page: this.props.ui.page - 1
    })  
  }

  render() {
    const {onSubmit} = this.props
    const {page} = this.props.ui
    return (
      <div className="Form">
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <FormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <FormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

Form = ui({
  state: {
    page: 1
  }
})(Form)

export default Form;
