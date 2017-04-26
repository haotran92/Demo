import shop from '../api/shop'

const receiveProducts = (products) => ({
  type: 'RECEIVE_PRODUCTS',
  products: products
})

const receiveBrands = (brands) => ({
  type: 'RECEIVE_BRANDS',
  brands: brands
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const getProductsForSaleDevice = () => dispatch => {
  shop.getProductsForSaleDevice((products, brands) => {
    dispatch(receiveProducts(products))
    dispatch(receiveBrands(brands))
  })
}
