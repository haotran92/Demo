import { connect } from 'react-redux'
import Listing from '../components/Listing'

const mapStateToProps = (state, ownProps) => ({
  products : state.listing,
  filter: ownProps.params.filter
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
