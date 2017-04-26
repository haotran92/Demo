import shop from 'api/shop'

export const receiveListing = products => ({
  type: 'RECEIVE_LISTING',
  products: products
})

export const fetchListing = (filter) => (dispatch, getState) => {
  const listing = getState().listing
  if (listing.length === 0) {
    shop.getAllProducts(products => {
      dispatch(receiveListing(products))
    })
  }
}
