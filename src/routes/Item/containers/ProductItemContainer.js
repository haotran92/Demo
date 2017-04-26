import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import {
  onAddSizeClicked,
  onAddColorClicked,
  onAddToCartClicked,
  onReviewCartClicked,
  onContinueShoppingClicked } from '../modules/action'

const getProductById = (state, ownProps) => {
  const products = state.listing.length > 0 ? state.listing : state.products
  const currentProduct = products.find(x => x.id === parseInt(ownProps.params.name))
  const selectOptions = state.item
  return currentProduct ? { ...currentProduct, ...selectOptions } : null
}

const mapStateToProps = (state, ownProps) => ({
  product : getProductById(state, ownProps),
  isMobile : state.device.isMobile
})

const mapDispatchToProps = {
  onSelectSize : m => onAddSizeClicked(m),
  onSelectColor : m => onAddColorClicked(m),
  onAddToCart:  (product) => onAddToCartClicked(product),
  onReviewCartClicked: () => onReviewCartClicked(),
  onContinueShoppingClicked: () => onContinueShoppingClicked()
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
