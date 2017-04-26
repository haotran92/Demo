import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap'

class MobileHeaderView extends Component {

  constructor (props) {
    super(props)
    this.onMenuSelected = this.onMenuSelected.bind(this)
  }

  onMenuSelected () {
    this.refs.closeBtn.click()
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <input type='checkbox' id='menustate' className='hidden' />
          <label ref='closeBtn' className='pull-left navbar-toggle' htmlFor='menustate'>
            <span className='icon-bar top-bar' />
            <span className='icon-bar middle-bar' />
            <span className='icon-bar bottom-bar' />
          </label>
          <div className='overlay'>
            <div className='overlay-content' onClick={this.onMenuSelected}>
              <Link to='/listing/all' key={1}>All Products</Link>
              <Link to='/listing/shoes' key={2}>Shoes</Link>
              <Link to='/listing/clothing' key={3}>Women's Clothing</Link>
              <Link to='/listing/watch' key={4}>Watches</Link>
            </div>
          </div>

          <Navbar.Brand>
            <IndexLink to='/'>Poseidon Digital</IndexLink>
          </Navbar.Brand>
          <Link to='/cart' className='cart'>
            <span className='glyphicon glyphicon-shopping-cart' aria-hidden='true' />
            <span className='cart-count'>{this.props.total}</span>
          </Link>
        </Navbar.Header>
      </Navbar>
    )
  }
}

MobileHeaderView.propTypes = {
  total: PropTypes.number.isRequired
}

const Header = (props) => {
  return (
    <div>
      <IndexLink to='/'>
        <div className='logo' />
      </IndexLink>
      <Link to='/cart' className='cart'>
        <span className='glyphicon glyphicon-shopping-cart' aria-hidden='true' />
        <span className='cart-count'>{props.total}</span>
      </Link>
      <div className='bar' />
    </div>
  )
}

Header.propTypes = {
  total: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  total : state.carts.length
})

export default connect(mapStateToProps)(Header)
export const MobileHeader = connect(mapStateToProps)(MobileHeaderView)
