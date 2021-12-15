// import React from 'react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const Changeobj = (props) => {
  // const Names = [{id: 1, name:'Prajapati'}, ]
  const [name, setname] = useState('abhay')
  const changename = () => {
    setname('Prjapaiti')
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changename}>Change Name</button>
    </div>
  )
}

// Changeobj.propTypes = {

export default Changeobj
