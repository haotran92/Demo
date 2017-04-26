import { connect } from 'react-redux'
import { onRemoveCartClicked, onChangeQuantity } from '../modules/action'
import CartProduct from '../components/Cart'

const mapStateToProps = (state) => ({
  cartProducts : state.carts
})

const mapDispatchToProps = {
  onRemoveCartClicked : (item) => onRemoveCartClicked(item),
  handleChange : (e, idx) => onChangeQuantity(e, idx)
}
export default connect(mapStateToProps, mapDispatchToProps)(CartProduct)
