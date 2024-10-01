import React from 'react'
import { useState } from 'react'

function FriendsList() {
    const [friends, setFriends] = useState(['John', 'Peter', 'Smith'])

    const addAlex = () =>{
        setFriends((friends)=> [...friends, "Alex"])
    }

  return (
    <div>
        <h3>Friends List</h3>
        <ol>
        {
            friends.map((friend, index)=> <li key={index}>{friend}</li>)
        }
        </ol>
        <button onClick={addAlex}>Add Alex</button>
    </div>
  )
}

export default FriendsList