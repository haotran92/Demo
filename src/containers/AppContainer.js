import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { getAllProducts, getProductsForSaleDevice } from '../action'

export default class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  componentDidMount () {
    const { store } = this.props
    store.getState().device.isMobile
    ? store.dispatch(getProductsForSaleDevice())
    : store.dispatch(getAllProducts())
  }

  render () {
    const { routes, store } = this.props
    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}
