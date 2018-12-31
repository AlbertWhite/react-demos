import React, { Component } from 'react'
import { PricingModal, Snackbar } from 'src/components/common'
// Create a new context for the app
export const AppContext = React.createContext('app')
// Creates a provider Component
class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openPricingModal: false
    }
    this.onOpenPricingModal = this.onOpenPricingModal.bind(this)
  }
  onOpenPricingModal() {
    this.setState({ openPricingModal: true })
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          onOpenPricingModal: this.onOpenPricingModal
        }}
      >
        {this.props.children}
        <PricingModal
          open={this.state.openPricingModal}
          onClose={() => this.setState({ openPricingModal: false })}
        />
      </AppContext.Provider>
    )
  }
}
export default AppProvider
