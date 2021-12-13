import React from 'react'
import PropTypes from 'prop-types'

const Profileitem = (props) => {
  let { name, email, city, phone, company } = props
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"></p>
          <h6>{email}</h6>
          <h6>{city}</h6>
          <h6>{phone}</h6>
          <h6>{company}</h6>
          <a href="/" className="btn btn-primary">
            Connect
          </a>
        </div>
      </div>
    </div>
  )
}

Profileitem.propTypes = {}

export default Profileitem
