import { connect } from 'react-redux'
import CategoryView from '../components/CategoryView'

const mapStateToProps = (state) => ({
  products : state.products,
  item : state.item
})

export default connect(mapStateToProps)(CategoryView)
