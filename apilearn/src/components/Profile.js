// import React from 'react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Profileitem from './Profileitem'

const Profile = (props) => {
  const [users, setusers] = useState([])
  const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    setusers(await response.json())
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
