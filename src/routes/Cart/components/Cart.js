import React, { PropTypes } from 'react'
import './Cart.scss'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const CartProduct = (props) => {
  const total = props.cartProducts ? props.cartProducts.reduce((a, b) => a + b.price * b.quantity, 0) : 0
  const preTax = total * 100 / 119
  const tax = total - preTax.toFixed(2)
  const header = (
    <thead>
      <tr>
        <th>Description</th>
        <th>Quantity</th>
        <th className='col-xs-2'>Price</th>
        <th className='col-xs-2'>Total</th>
      </tr>
    </thead>
)
  const table = props.cartProducts.length
? (
  <table className='table table-condensed'>
    {header}
    <tbody>
      {
    props.cartProducts.map((m, idx) =>
      <tr key={idx}>
        <td>
          <img src={require(`assets/${m.thumbnail}`)} />
          <div className='holder'>
            <span>{m.title}</span>
            <span>Number:</span> 1273127318
          <br />
            <span>Color:</span> {m.selectedColor || 'N/A'}
            <br />
            <span>Size:</span> {m.selectedSize}
          </div>
        </td>
        <td>
          <select className='dropdown' onChange={(e) => props.handleChange(e, idx)} value={m.quantity}>
            {
            [1, 2, 3, 4, 5].map(m => <option key={'Quantity.' + m} value={m}>{m}</option>)
          }
          </select>
          <button className='btn btn-danger' onClick={() => props.onRemoveCartClicked(idx)}>
          Remove <span className='hidden-xs'>From Cart</span>
          </button>
        </td>
        <td><span>{m.price} €</span></td>
        <td>{m.price * m.quantity} €</td>
      </tr>
  )}
    </tbody>
  </table>
)
: <span>Your cart is empty</span>
  const footer = (
    <div className='cart-footer'>
      <ul className='total'>
        <li>
          <strong>Summe Artikel (netto)</strong>
          <strong>{preTax.toFixed(2)} €</strong>
        </li>
        <li>
          <strong>MwSt. Anteil 19%:</strong>
          <strong>{tax.toFixed(2)} €</strong>
        </li>
        <li>
          <strong>Summe Artikel (brutto)</strong>
          <strong>{total.toFixed(2)} €</strong>
        </li>
        <li className='sum'>
          <strong>SUMME:</strong>
          <strong>{total.toFixed(2)} €</strong>
        </li>
      </ul>
    </div>
)

  return (
    <div className='cart-container'>
      <div className='your-cart'>
        Your Cart
      </div>
      <CSSTransitionGroup
        component='div'
        className={props.cartProducts.length ? 'text-left' : 'text-center'}
        transitionName='fade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {table}
        {props.cartProducts.length !== 0 && footer}
      </CSSTransitionGroup>
    </div>
  )
}

CartProduct.propTypes = {
  cartProducts: PropTypes.array.isRequired
}

export default CartProduct
