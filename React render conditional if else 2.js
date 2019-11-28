
import React from 'react'

function FriendList ({ friendList }) {
  return (
    <div>
      { (friendList.length > 0) ? (
        <ul>
          { friendList.map((friend, i) => {
            return <li key={i}>{ friend.name }</li>
          })}
        </ul>
      ) : (
        <h1>
          Aún no tienes amigos
        </h1>
      )}
    </div>
  )
}

FriendList()
