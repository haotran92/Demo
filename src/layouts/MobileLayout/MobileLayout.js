import React, { PropTypes } from 'react'
import { MobileHeader } from '../../components/Header/Header.js'
import './MobileLayout.scss'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export const MobileLayout = ({ children }) => {
  return (
    <div className='container'>
      <MobileHeader />
      <CSSTransitionGroup
        component='div'
        transitionName='example'
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {React.cloneElement(children, { key: children.props.location.pathname.substr(1) })}
      </CSSTransitionGroup>
    </div>
  )
}

MobileLayout.propTypes = {
  children : PropTypes.element.isRequired
}
