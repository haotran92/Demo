import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './ProductItem.scss'
import { Popover, OverlayTrigger, Button, Alert, Carousel } from 'react-bootstrap'

class AlertView extends React.Component {

  componentDidMount () {
    ReactDOM.findDOMNode(this).scrollIntoView()
  }

  render () {
    return (
      <Alert key={123} bsStyle='warning'>
        <strong>Congrats!</strong> Your item has been added to cart.
      </Alert>
    )
  }
}

const renderDesktopView = (props) => {
  const sizes = props.product
    ? props.product.sizes.map(
      (m, i) =>
        <li className={props.option && props.option.size === m ? 'active' : null}
          key={i}
          onClick={(e) => props.onSelectSize(m)}> {m} </li>)
    : null
  const colors = props.product
     ? props.product.colors.map((m, i) =>
       <li className={props.option && props.option.color === m ? 'active' : null}
         key={i}
         onClick={() => props.onSelectColor(m)}> {m} </li>)
      : null
  const popoverClick = (
    <Popover id='popover-trigger-click' title='Customize the size and color'>
      <strong>Please make a choice:</strong>
      <h4>Size</h4>
      <ul className='size-color'>
        {sizes}
      </ul>
      <h4>Color</h4>
      <ul className='size-color'>
        {colors}
      </ul>
    </Popover>
  )

  const renderSlider = (
    <div>
      <img className='brand' src={require(`assets/${props.product.icon}`)} />
      <div className='slider'>
        {
          props.product.slideshow.map((m) => {
            return (<img key={m} src={require(`assets/${m}`)} />)
          })
        }
      </div>
    </div>
)

  return (
    <div>
      { props.product && renderSlider }
      <div className='info'>
        <div className='product-name'>
          <div>{props.product && props.product.title}</div>
          <div>{props.product && props.product.price} $</div>
        </div>
        { props.option.alertVisible && <AlertView /> }
        <div className='control-container'>
          <Button bsSize='large' bsStyle='success' onClick={() => props.onAddToCart(props.product)}>
            {props.option.isAddedToCart ? 'Review Cart' : 'Add to cart'}
          </Button>
          <OverlayTrigger trigger='click' rootClose placement='top' overlay={popoverClick} >
            <Button bsSize='large' bsStyle='warning'>Customize</Button>
          </OverlayTrigger>
        </div>
      </div>
    </div>
  )
}

const renderMobileView = (props) => {
  const sizes = (
    <div>
      <div className='product-price'>{props.product.price} $</div>
      <h3>Select size:</h3>
      <ul className='variant-radios'>
        {
          props.product.sizes.map(
            (m, i) =>
              <li className={props.product.selectedSize === m ? 'active' : null}
                key={i}
                onClick={(e) => props.onSelectSize(m)}>{m}
              </li>
          )
        }
      </ul>
    </div>
  )

  const carouselInstance = (
    <Carousel>
      {props.product.slideshow.map(m =>
        <Carousel.Item key={m}>
          <img src={require(`assets/${m}`)} />
        </Carousel.Item>
      )}
    </Carousel>
  )

  return (
    <div className='page-inner'>
      { props.product.alertVisible && <AlertView /> }
      <h3>{props.product.title}</h3>
      { carouselInstance }
      { sizes }
      <div className='btn-fixed-block'>
        <button
          className='btn btn-danger btn-block'
          onClick={() => props.onAddToCart(props.product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export const ProductItem = (props) => {
  return (
    <div className='item-container'>
      { props.isMobile ? props.product && renderMobileView(props) : renderDesktopView(props) }
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object,
  isMobile: PropTypes.bool
}

renderDesktopView.propTypes = {
  product: PropTypes.object,
  option: PropTypes.object,
  onAddToCart: PropTypes.func
}

renderMobileView.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func
}

export default ProductItem
