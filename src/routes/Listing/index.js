import { fetchListing } from './modules/action'

export default (store) => ({
  path : 'listing/:filter',
  getComponent (nextState, callback) {
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Listing = require('./containers/ListingContainer').default
      store.dispatch(fetchListing())
      // const reducer = require('./modules/action').default

      /*  Add the reducer to the store on key 'cßounter'  */
      // injectReducer(store, { key: 'listing', null })

      /*  Return getComponent   */
      callback(null, Listing)
    }, 'listing')
  }
})
