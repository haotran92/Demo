const initialState = null
export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_ITEM':
      return {
        products: [...state.products],
        item: [...state.item, action.item]
      }
    default:
      return state
  }
}
