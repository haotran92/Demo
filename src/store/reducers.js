import { combineReducers } from 'redux'
import { productsReducer, cartReducer, deviceReducer, brandsReducer, listingReducer } from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    products: productsReducer,
    listing: listingReducer,
    brands: brandsReducer,
    carts:  cartReducer,
    device: deviceReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
