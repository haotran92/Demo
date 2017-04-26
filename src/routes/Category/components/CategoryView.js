import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './CategoryView.scss'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6

export const CategoryView = (props) => {
  let i = 0
  const hasProducts = props.products && props.products.length > 0
  const elements = hasProducts ? props.products.map(m =>
    <Link to={`/item/${m.id}`} key={m.id}>
      <img src={require(`assets/SAP ATTUNE/01/POS Luigi Garbinola Seite 1R${++i}C1.png`)} />
      <img src={require(`assets/SAP ATTUNE/01/POS Luigi Garbinola Seite 1R${++i}C1.png`)} />
    </Link>
  )
  : <span> There is no product</span>
  return (
    <CSSTransitionGroup
      transitionName='example'
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      {elements}
    </CSSTransitionGroup>
  )
}

CategoryView.propTypes = {
  products: PropTypes.object.isRequired
}

export default CategoryView
