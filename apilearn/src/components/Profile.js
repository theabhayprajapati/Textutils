// import React from 'react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Profileitem from './Profileitem'

const Profile = (props) => {
  const [name, setname] = useState('rahul')
  const [users, setusers] = useState([])
  const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    setusers(await response.json())
  }
  const changename = () => {
    if (name === 'rahul') {
      setname('hellow')
    } else {
      setname('rahul')
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Profileitem
              name={user.name}
              email={user.email}
              city={user.address.city}
              phone={user.phone}
              company={user.username}
            />
            <h1>MYname{name}</h1>
            <button onClick={changename}></button>
          </div>
        )
      })}
    </div>
  )
}

// usefProfile.propTypes = {
//   usef,
// }

export default Profile
