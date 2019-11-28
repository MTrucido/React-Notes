
import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

function TopBar ({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      {user.login ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
    </div>
  )
}

TopBar()
