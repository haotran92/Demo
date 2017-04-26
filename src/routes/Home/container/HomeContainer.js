import { connect } from 'react-redux'
import HomeView from '../components/HomeView'

const mapStateToProps = (state) => ({
  isMobile : state.device.isMobile,
  products : state.products,
  brands : state.brands
})

export default connect(mapStateToProps)(HomeView)
