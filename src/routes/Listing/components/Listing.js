import React, { PropTypes } from 'react'
import { Col, Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router'

const Listing = (props) => {
  return (
    <div className='text-center'>
      {
        props.products
        .filter(m => props.filter === 'all' || m.type === props.filter || m.brand === props.filter)
        .map(m => (
          <Col xs={12} key={m.id}>
            <Link to={`/item/${m.id}`}>
              <Thumbnail src={require(`assets/${m.thumbnail}`)} alt='242x200'>
                <h3>{m.title}</h3>
                <p>{m.price} $</p>
              </Thumbnail>
            </Link>
          </Col>
        )
      )}
    </div>
  )
}

Listing.propTypes = {
  filter: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
}

export default Listing
