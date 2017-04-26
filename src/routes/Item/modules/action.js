// import { browserHistory } from 'react-router'

const initialState = {
  isAddedToCart: false,
  alertVisible: false
}

export const addSize = size => ({
  type: 'ADD_SIZE',
  size: size
})

export const addColor = color => ({
  type: 'ADD_COLOR',
  color: color
})

export const addToCart = product => ({
  type: 'ADD_TO_CART',
  product: product
})

export const processingCart = () => ({
  type: 'PROCESSING_CART'
})

export const resetProduct = () => ({
  type: 'RESET_PRODUCT'
})

export default function makeSelectionReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_SIZE':
      return {
        ...state,
        selectedSize: action.size
      }
    case 'ADD_COLOR':
      return {
        ...state,
        selectedColor: action.color
      }
    case 'SHOW_ALERT':
      return {
        ...state,
        alertVisible: true
      }
    case 'HIDE_ALERT':
      return {
        ...state,
        alertVisible: false
      }
    case 'PROCESSING_CART':
      return {
        ...state,
        isAddedToCart: true
      }
    case 'RESET_PRODUCT':
      return {
        ...state,
        isAddedToCart: false,
        selectedSize: null,
        selectedColor: null
      }
    default:
      return state
  }
}

export const onAddSizeClicked = (m) => (dispatch) => {
  dispatch(addSize(m))
}

export const onAddColorClicked = (m) => (dispatch) => {
  dispatch(addColor(m))
}

export const onAddToCartClicked = (product) => (dispatch, getState) => {
  dispatch(addToCart({
    ...product,
    quantity: 1
  }))
  dispatch({ type: 'SHOW_ALERT' })
  setTimeout(() => dispatch({ type: 'HIDE_ALERT' }), 2000)
  dispatch(processingCart())
}
