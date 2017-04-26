// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export const deviceReducer = (state = initialState, action) => {
  return state
}

export const brandsReducer = (state = initialState, action) => {
  return action.type === 'RECEIVE_BRANDS'
   ? action.brands
   : state
}

export const listingReducer = (state = initialState, action) => {
  return action.type === 'RECEIVE_LISTING'
     ? action.products
     : state
}

export const productsReducer = (state = initialState, action) => {
  return action.type === 'RECEIVE_PRODUCTS'
    ? action.products
    : state
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        action.product
      ]
    case 'REMOVE_FROM_CART':
      const { index } = action
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    case 'CHANGE_QUANTITY':
      const { idx, value } = action
      return state.map((obj, id) => {
        if (id === idx) {
          obj.quantity = parseInt(value)
        }
        return obj
      })
    default:
      return state
  }
}
