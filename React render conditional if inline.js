
import React from 'react'
import IconGPS from './IconGPS'

function ViewUser ({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h4>{user.age}</h4>
      {user.location &&
        <IconGPS />
      }
    </div>
  )
}
