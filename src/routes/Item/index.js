import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'item/:name',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, callback) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./containers/ProductItemContainer').default
      const reducer = require('./modules/action').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'item', reducer })

      /*  Return getComponent   */
      callback(null, Counter)

    /* Webpack named bundle   */
    }, 'item')
  }
})
