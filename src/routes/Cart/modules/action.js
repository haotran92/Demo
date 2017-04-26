export const COUNTER_INCREMENT = 'ADD_TO_CART'
export const COUNTER_DOUBLE_ASYNC = 'REMOVE_FROM_CART'

// ------------------------------------
// Reducer
// ------------------------------------

export const removeCart = idx => ({
  type: 'REMOVE_FROM_CART',
  index: idx
})

export const changeQuantity = (idx, value) => ({
  type: 'CHANGE_QUANTITY',
  value: value,
  idx: idx
})

export const onRemoveCartClicked = (idx) => (dispatch, getState) => {
  dispatch(removeCart(idx))
}

export const onChangeQuantity = (e, idx) => (dispatch, getState) => {
  dispatch(changeQuantity(idx, e.target.value))
}
