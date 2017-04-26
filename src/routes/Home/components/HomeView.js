import React, { PropTypes } from 'react'
import './HomeView.scss'
import { Link } from 'react-router'

const HomeView = (props) => {
  const desktopView = (
    <div className='main'>
      <img src={require('../assets/stkl/st01.jpg')} />
      <img src={require('../assets/stkl/st02.jpg')} />
      <img src={require('../assets/stkl/st03.jpg')} />
      <img src={require('../assets/stkl/st04.jpg')} />
      <img src={require('../assets/stkl/st05.jpg')} />
      <img src={require('../assets/stkl/st06.jpg')} />
      <img src={require('../assets/stkl/st07.jpg')} />
      <img src={require('../assets/stkl/st08.jpg')} />
      <img src={require('../assets/stkl/st09.jpg')} />
      <img src={require('../assets/stkl/st10.jpg')} />
      <img src={require('../assets/stkl/st11.jpg')} />
      <img src={require('../assets/stkl/st12.jpg')} />
      <Link to='/category' activeClassName='route--active'>
        <img src={require('../assets/stkl/stlg01.jpg')} />
        <img src={require('../assets/stkl/stlg02.jpg')} />
        <img src={require('../assets/stkl/stlg03.jpg')} />
        <img src={require('../assets/stkl/stlg04.jpg')} />
      </Link>
      <img src={require('../assets/Logo_Footer.png')} />
    </div>
    )

  const mobileView = (
    <div className='page'>
      <h3 className='high-light'>HIGHLIGHTS</h3>
      <div className='top-highlight'>
        {
              props.products.map(m =>
                <Link to={`/item/${m.id}`} key={m.thumbnail} >
                  <img src={require(`assets/${m.thumbnail}`)} />
                </Link>
          )}
      </div>
      <h3 className='high-light'>TOP MARKEN</h3>
      <div className='top-brands'>
        {
              props.brands.map(m =>
                <Link to={`/listing/${m.brand}`} key={m.brand} >
                  <img key={m} src={require(`assets/${m.icon}`)} />
                </Link>
          )}
      </div>
    </div>
    )

  return (
    <div>
      { props.isMobile ? mobileView : desktopView }
    </div>
  )
}

HomeView.propTypes = {
  brands: PropTypes.array,
  products: PropTypes.array,
  isMobile: PropTypes.bool
}

export default HomeView
